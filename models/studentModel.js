const mongoose = require("mongoose");
const schema = mongoose.Schema;
const studSchema = new mongoose.Schema({
  name: {
    type: String,
   
  },
  email: {
    type: String,
    unique: true,
  },
  course: {
    type: String,
  
  },
  mentorAssigned: {
    type: schema.Types.ObjectId,
    default: null,
    ref: "mentor",
  },
});

const student = mongoose.model("student", studSchema,"student");

const mentorSchema = schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  module: {
    type: String,
    required: true,
  },
  studentsAssigned: [
    {
      type: schema.Types.ObjectId,
      ref: "student",
      default: null,
    },
  ],
});

const mentor = mongoose.model("mentor", mentorSchema,"mentor");

module.exports = { student, mentor };
