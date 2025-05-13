import mongoose from "mongoose";
const potentialStudentSchema = new mongoose.Schema(
  {
    course: {
      type: String,
      required: true,
    },

    parentFullName: {
      type: String,
      required: true,
    },
    parentPhone: {
      type: String,
      required: true,
      match: [/^\d{9}$/, "გთხოვთ მიუთითოთ ვალიდური ტელეფონის ნომერი"],
    },
    parentEmail: {
      type: String,
      required: false,
      match: [/.+@.+\..+/, "გთხოვთ მიუთითოთ სწორი ელ-ფოსტა"],
    },

    studentFullName: {
      type: String,
      required: true,
    },
    studentClass: {
      type: String,
      required: true,
    },
    studentPhone: {
      type: String,
      required: false,
      match: [/^\d{9}$/, "გთხოვთ მიუთითოთ ვალიდური ტელეფონის ნომერი"],
    },
  },
  { timestamps: true }
);

export const PotentialStudent = mongoose.model(
  "PotentialStudent",
  potentialStudentSchema
);
