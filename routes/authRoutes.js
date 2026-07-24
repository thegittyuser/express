import express from "express";
import {
  dologin,
  doregister,
  login,
  register,
  welcome,
} from "../controller/authController.js";
const router = express.Router();

router.get("/register", register);
router.post("/doregister", doregister);
router.get("/login", login);
router.post("/dologin", dologin);
router.get("/welcome", welcome);

export default router;
