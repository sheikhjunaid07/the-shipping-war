import express from "express";
import * as SubCategoryController from "../controller/subcategory.controller.js";

const router = express.Router();

router.post("/save", SubCategoryController.save);

router.get("/fetch", SubCategoryController.fetch);

export default router;
