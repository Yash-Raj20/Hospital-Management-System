import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validator: [validator.isEmail, "Please provide a valis Email!"],
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone Number must contain 10 digits"],
    maxLength: [10, "Phone Number must contain 10 digits"],
  },
  message: {
    type: String,
    required: true,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
