const mongoose = require("mongoose");

const animalSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    species: { type: String, required: true },
    color: { type: String, required: true },
    legs: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    collection: "Animals",
  }
);


const Animal = mongoose.model("Animal", animalSchema);
module.exports = Animal;
