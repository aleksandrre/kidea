import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,

      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (props) => `${props.value} არ არის სწორი email მისამართი!`,
      },
    },
    mobile: { type: String },
    theme: {
      type: String,
    },
    question: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Question = mongoose.model("Question", questionSchema);
