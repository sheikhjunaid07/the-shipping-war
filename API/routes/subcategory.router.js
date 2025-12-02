import express from "express";
import * as SubCategoryController from "../controller/subcategory.controller.js";

const router = express.Router();

router.post("/save", SubCategoryController.save);

router.get("/fetch", SubCategoryController.fetch);

router.patch("/update", SubCategoryController.update);

export default router;
