import express from "express";
import { doregister, register } from "../controller/authController.js";
const router = express.Router();

router.get("/register", register);
router.post("/doregister", doregister);

export default router;
