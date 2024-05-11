const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyAPQBP559_W437RJdbUomWaaWKr9Dvmjg8");

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    }
  };
}

async function run() {
  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt = `
  Using the provided image of the front page of an Aadhar card, perform the following tasks:

        Apply optical character recognition (OCR) to convert the image into text.
        Extract the following information from the recognized text:
        Name
        Date of Birth (format: dd/mm/yy)
        Aadhar Number (12-digit number)
        Gender (either 'male' or 'female')
        Format the extracted information into a JSON object with the keys 'name', 'dob', 'aadharCardNumber', and 'gender'.
    Ensure the accuracy of text recognition and information extraction. The output should be in the JSON format as specified.
`;

  const imageParts = [fileToGenerativePart("image.jpg", "image/jpeg")];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
