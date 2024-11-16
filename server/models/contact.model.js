import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minLength: [2, "First name must be at least 2 characters long"],
      maxLength: [50, "First name must be less than 50 characters"],
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minLength: [2, "Last name must be at least 2 characters long"],
      maxLength: [50, "Last name must be less than 50 characters"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\d{10}$/, "Phone number must be a valid 10-digit number"],
    },
    company: {
      type: String,
      required: [true, "Company name is required"],
      maxLength: [100, "Company name must be less than 100 characters"],
      trim: true,
    },
    jobTitle: {
      type: String,
      required: [true, "Job title is required"],
      maxLength: [50, "Job title must be less than 50 characters"],
      trim: true,
    },
  },
  {
    timestamps: true, 
  }
);

const Contact = model("Contact", userSchema);

export default Contact;
