import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import Appointment from "../model/appointment.model.js";

export const sendAppointment = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please fill out the full form", 400));
  }

  // Create the appointment
  await Appointment.create({ firstName, lastName, email, phone, message });

  return res.status(200).json({
    success: true,
    message: "Appointment sent successfully",
  });
});
