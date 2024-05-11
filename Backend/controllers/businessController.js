import Business from "../model/loanModel.js";
import cloudinary from "cloudinary";
export const post = async (req, res) => {
  if (!req.files || Object.keys(req.files).length == 0) {
    return res.status(400).send("Files misssing");
  }
  const { files } = req;

  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    let file = files[i];

    formData.append("files", file);
  }
  console.log("Req", req.files);
  return res.status(400).send(formData);
  const {
    nameOfBusiness,
    phoneNumber,
    isVerified,
    accountHolderName,
    isMSMERegistered,
    panCardNumber,
    address,
    businessAddress,
    haveGST,
    gstNumber,
    businessPlan,
    messageHistory,
    financialDocumentsURL,
    bankStatements,
    accountNumber,
    ifscCode,
    loanApproved,
    aadharCardNumber, // Assuming you meant to destructure this from req.body
  } = req.body;

  // Check if the files are included in the request
  const { panCardURL, aadharCardURL } = req.files;

  if (!panCardURL || !aadharCardURL) {
    return res
      .status(400)
      .send("Both PAN card and Aadhar card files are required.");
  }

  try {
    // Upload the PAN card image
    const cloudinaryResponsePan = await cloudinary.uploader.upload(
      panCardURL.tempFilePath
    );

    // Upload the Aadhar card image
    const cloudinaryResponseAdhaar = await cloudinary.uploader.upload(
      aadharCardURL.tempFilePath
    );

    // Create a new business entry
    const newBusiness = new Business({
      nameOfBusiness,
      phoneNumber,
      isVerified,
      accountHolderName,
      isMSMERegistered,
      panCardURL: cloudinaryResponsePan.secure_url,
      panCardNumber,
      aadharCardURL: cloudinaryResponseAdhaar.secure_url,
      aadharCardNumber,
      address,
      businessAddress,
      haveGST,
      gstNumber,
      businessPlan,
      messageHistory,
      financialDocumentsURL,
      bankStatements,
      accountHolderName,
      accountNumber,
      ifscCode,
      loanApproved,
    });

    await newBusiness.save(); // Save the new business to the database
    res.status(201).send("Business added successfully");
  } catch (error) {
    console.error("Error uploading files or saving the business:", error);
    res.status(500).send("Error processing your request.");
  }
};

export const patch = async (req, res) => {
  const { id } = req.params; // Get the business ID from the URL parameter
  const update = req.body; // Get the updates from the request body

  try {
    // Find the business by ID and update it with the provided data
    const updatedBusiness = await Business.findByIdAndUpdate(id, update, {
      new: true, // Return the updated document
      runValidators: true, // Ensure the update adheres to the model validations
    });

    if (!updatedBusiness) {
      return res.status(404).send("Business not found");
    }

    res.status(200).send(updatedBusiness); // Send the updated business details
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export const get = async (req, res) => {
  const { id } = req.params; // Get the business ID from the URL parameter

  try {
    const business = await Business.findById(id); // Find the business by ID

    if (!business) {
      return res.status(404).send("Business not found");
    }

    res.status(200).send(business); // Send the found business details
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export const getAll = async (req, res) => {
  try {
    const businesses = await Business.find({}); // Fetch all documents from the Business collection

    if (!businesses.length) {
      return res.status(404).send("No businesses found");
    }

    res.status(200).send(businesses); // Send the retrieved businesses
  } catch (error) {
    res.status(500).send("Error fetching businesses: " + error.message);
  }
};
