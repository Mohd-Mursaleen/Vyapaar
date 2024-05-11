import express from "express";
import { post, patch, get, getAll } from "../controllers/businessController.js"; // Adjust the path as necessary
import {
  adharFrontPageOCR,
  adharBackPageOCR,
  panCardOCR
} from "../controllers/ocrController.js"; // Adjust the path as necessary
import {
  creditReport,
  creditScores,
  creditSummary,
  gstTurnOver,
  gstFilling,
  bankStatement
} from "../controllers/financialApiController.js";

const router = express.Router();

// Route to handle creating a new business entry
router.post("/business", post);

// Route to handle updating an existing business entr
router.patch("/business/:id", patch);

// Route to get a specific business by ID
router.get("/business/:id", get);

// Route to get all businesses
router.get("/businesses", getAll);

// OCR Router

router.post("/adharfront", adharFrontPageOCR);
router.post("/adharback", adharBackPageOCR);
router.post("/panCard", panCardOCR);

// Financial API Endpoints
router.post("/creditreport", creditReport);
router.post("/creditscores", creditScores);
router.post("/creditsummary", creditSummary);
router.post("/gstturnOver", gstTurnOver);
router.post("/gstfilling", gstFilling);
router.post("/bankstatement", bankStatement);

export default router;
