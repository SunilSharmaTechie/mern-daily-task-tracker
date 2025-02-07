import mongoose from "mongoose";

// Helper function to generate a slug from the title.
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-") // Replace spaces and non-word characters with a hyphen.
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens.
};

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Task description is required"],
    },
    details: {
      type: String,
      default: "",
    },
    // A field to associate the task with a user.
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

TaskSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = generateSlug(this.title);
  }
  next();
});

export default mongoose.model("Task", TaskSchema);
