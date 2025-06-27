import express from "express";
import * as UserController from "../controller/user.controller.js";

const router = express.Router();

router.post("/save", UserController.save);

router.get("/fetch", UserController.fetch);

router.delete("/delete", UserController.deleteUser);

router.patch("/update", UserController.update);

router.post("/login", UserController.login);

export default router;
