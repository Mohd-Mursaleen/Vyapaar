import Business from "../model/loanModel.js";
export const post = async (req, res) => {
  const {
    nameOfBusiness,
    phoneNumber,
    isVerified,
    accountHolderName,
    isMSMERegistered,
    panCardURL,
    panCardNumber,
    aadharCardURL,
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
  } = req.body;

  const newBusiness = new Business({
    nameOfBusiness,
    phoneNumber,
    isVerified,
    accountHolderName,
    isMSMERegistered,
    panCardURL,
    panCardNumber,
    aadharCardURL,
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
