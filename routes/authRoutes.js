import express from "express";
import {
  dologin,
  doregister,
  login,
  register,
} from "../controller/authController.js";
const router = express.Router();

router.get("/register", register);
router.post("/doregister", doregister);
router.get("/login", login);
router.post("/dologin", dologin);

export default router;
