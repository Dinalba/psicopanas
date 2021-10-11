const { Schema, model } = require("mongoose");

const entrySchema = new Schema(
  {
    title: String,
    content: {
      type: String,
      required: true,
    },
    author: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Entry", entrySchema);
