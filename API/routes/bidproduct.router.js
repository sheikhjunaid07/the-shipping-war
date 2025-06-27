import express from "express";
import * as BidProductController from "../controller/bidproduct.controller.js";

const router = express.Router();

router.post("/save", BidProductController.save);

router.get("/fetch", BidProductController.fetch);

export default router;
