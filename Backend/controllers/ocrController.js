import fetch from "node-fetch";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

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

    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
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

export const adharBackPageOCR = async (req, res) => {
  const imageUrl = req.body.url;
  if (!imageUrl) {
    return res.status(400).send({ error: "Image URL is required" });
  }

  try {
    const { base64, mimeType } = await fetchImageAsBase64(imageUrl);

    const prompt = `
    Using the provided image of the backside of an Aadhar card, perform the following tasks:

    Apply optical character recognition (OCR) to convert the image into text.
    Carefully extract the complete address as displayed on the card. This should include detailed components such as house number, street name, locality, city, state, and pin code.
    Format the extracted address into a JSON object. The JSON should include separate keys for each component of the address (e.g., 'houseNumber', 'street', 'locality', 'city', 'state', 'pinCode').
    Ensure the OCR process is accurate, and the address extraction captures all relevant details in a structured JSON format, maintaining clarity and precision..
        `;

    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
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

    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
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
