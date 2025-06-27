import express from "express";
import * as CategoryController from "../controller/category.controller.js";

const router = express.Router();

router.post("/save", CategoryController.save);

router.get("/fetch", CategoryController.fetch);

// router.delete("/delete", CategoryController.deletecategory);

router.patch("/update", CategoryController.update);

export default router;
