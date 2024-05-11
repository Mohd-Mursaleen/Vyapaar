import express from "express";
import { post, patch, get, getAll } from "../controllers/businessController.js"; // Adjust the path as necessary
import {
  adharFrontPageOCR,
  adharBackPageOCR,
  panCardOCR
} from "../controllers/ocrController.js"; // Adjust the path as necessary

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
router.post("/adfront", adharFrontPageOCR);
router.post("/adback", adharBackPageOCR);
router.post("/pan", panCardOCR);

export default router;
