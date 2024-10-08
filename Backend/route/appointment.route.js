import express from "express";
import { sendAppointment } from "../controller/appointmentController.js";

const router = express.Router();
router.post("/send", sendAppointment);

export default router;
