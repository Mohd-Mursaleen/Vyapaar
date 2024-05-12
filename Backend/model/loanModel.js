import mongoose from "mongoose";

const Schema = mongoose.Schema;

const businessSchema = new Schema({
  nameOfBusiness: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  isVerified: {
    type: Boolean,

    default: false,
  },
  accountHolderName: {
    type: String,
  },

  isMSMERegistered: {
    type: String,
    enum: ["Yes", "No"],
  },
  panCardURL: {
    type: String,
  },
  panCardNumber: {
    type: String,
  },
  gender: {
    type: String,
  },
  aadharCardFrontURL: {
    type: String,
  },
  aadharCardBackURL: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  businessAddress: {
    type: String,
  },
  dob: {
    type: String,
  },

  gstNumber: {
    type: String,
  },
  businessPlan: {
    type: String,
  },
  messageHistory: {
    type: Schema.Types.Mixed,
  },
  financialDocumentsURL: {
    type: String,
  },
  yearlyRevenue: {
    type: String,
  },
  bankStatements: {
    type: String,
  },
  accountHolderName: {
    type: String,

    trim: true,
  },
  accountNumber: {
    type: String,
  },
  ifscCode: {
    type: String,
  },
  loanApproved: {
    type: Boolean,
  },
});

const Business = mongoose.model("Business", businessSchema);
export default Business;
