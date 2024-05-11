import fetch from "node-fetch";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAPQBP559_W437RJdbUomWaaWKr9Dvmjg8");

const generation_config = {
  temperature: 1,
  top_p: 0.95,
  top_k: 0,
  max_output_tokens: 8192
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE
  }
];

// Helper function to fetch image data and convert to base64
async function fetchImageAsBase64(url) {
  const response = await fetch(url);
  const mimeType = response.headers.get("content-type");
  const buffer = await response.buffer();
  return {
    base64: buffer.toString("base64"),
    mimeType
  };
}

export const adharFrontPageOCR = async (req, res) => {
  const imageUrl = req.body.url;
  if (!imageUrl) {
    return res.status(400).send({ error: "Image URL is required" });
  }

  try {
    const { base64, mimeType } = await fetchImageAsBase64(imageUrl);

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

    const model = genAI.getGenerativeModel({
      model: "gemini-pro-vision",
      safetySettings
    });
    const imageParts = [
      {
        inlineData: {
          data: base64,
          mimeType: mimeType
        }
      }
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    let text = await response.text(); // Changed from 'const' to 'let' to allow reassignment

    // Log the original text for debugging
    console.log("Original text:", text);

    // Remove Markdown code block syntax (triple backticks and "json" label)
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Log the cleaned text to make sure it's correct
    console.log("Cleaned text:", text);

    const data = JSON.parse(text); // Parses the cleaned JSON string into a JavaScript object.
    res.json({ result: data });
  } catch (error) {
    console.error("Failed to process image:", error);
    res.status(500).send({ error: "Failed to process image" });
  }
};

export const adharBackPageOCR = async (req, res) => {
  const imageUrl = req.body.url;
  if (!imageUrl) {
    return res.status(400).send({ error: "Image URL is required" });
  }

  try {
    const { base64, mimeType } = await fetchImageAsBase64(imageUrl);

    const prompt = `
    Using the provided image of the back page of an Aadhar card, perform the following tasks:
  
    Apply optical character recognition (OCR) to convert the image into text.
    Extract the following information from the recognized text:
    Name
    Address (string)
    pin code (6-digit number)
    state (string)
    Format the extracted information into a JSON object with the keys 'address', 'pinCode', 'state'.
    Ensure the accuracy of text recognition and information extraction. The output should be in the JSON format as specified. `;

    const model = genAI.getGenerativeModel({
      model: "gemini-pro-vision",
      safetySettings
    });
    const imageParts = [
      {
        inlineData: {
          data: base64,
          mimeType: mimeType
        }
      }
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    let text = await response.text(); // Changed from 'const' to 'let' to allow reassignment
    console.log("text", text);
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Log the cleaned text to make sure it's correct
    console.log("Cleaned text:", text);

    const data = JSON.parse(text); // Parses the cleaned JSON string into a JavaScript object.
    res.json({ result: data });
  } catch (error) {
    console.error("Failed to process image:", error);
    res.status(500).send({ error: "Failed to process image" });
  }
};

export const panCardOCR = async (req, res) => {
  const imageUrl = req.body.url;
  if (!imageUrl) {
    return res.status(400).send({ error: "Image URL is required" });
  }

  try {
    const { base64, mimeType } = await fetchImageAsBase64(imageUrl);

    const prompt = `
      Process the provided image of the front side of a PAN card to extract textual data. Utilize optical character recognition (OCR) to convert the image into text. From the converted text, specifically extract the father's name and the PAN card number, which is a 10-character alphanumeric identifier. Once these details are identified, format them into a JSON object. The JSON should be structured as follows:
{
  "panCardNumber": "[Extracted PAN card number]",
  "fatherName": "[Extracted father's name]"
}
Ensure that the OCR accurately captures all relevant text and that the final JSON output is precise and correctly formatted, providing clear and structured data.`;

    const model = genAI.getGenerativeModel({
      model: "gemini-pro-vision",
      safetySettings
    });
    const imageParts = [
      {
        inlineData: {
          data: base64,
          mimeType: mimeType
        }
      }
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = await response.text();
    res.json({ result: JSON.parse(text) });
  } catch (error) {
    console.error("Failed to process image:", error);
    res.status(500).send({ error: "Failed to process image" });
  }
};
