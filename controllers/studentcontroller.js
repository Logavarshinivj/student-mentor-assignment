const {student,mentor} = require("../models/studentModel");
// import { student } from "../models/studentModel"

const createStudent = async (req, res) => {
  // try {
    const { name, email, course, mentorAssigned } = req.body;
    const newData = await student.create({
      name,
      email,
      course,
      mentorAssigned
    });
    
    res.send(newData);
  // } 
  // catch (err) {
  //   console.log(err);
  //   res.send("error in student post");
  // }
};

const getStudent =async (req,res)=>{
  try{
    const data= await student.find()
    res.send(data)
  }
  catch (err) {
    res.send(err)
  }

}


const createMentor=async (req,res)=>{
  try {
    const { name, email, module, studentsAssigned } = req.body;
    const newData = await mentor.create({
      name,
      email,
      module,
      studentsAssigned
    });
    
    res.send(newData);
  } 
  catch (err) {
    console.log(err);
    res.send("error in mentor post");
  }
  
}

const getMentor =async (req,res)=>{
  try{
    const data= await mentor.find()
    res.send(data)
  }
  catch (err) {
    res.send(err)
  }

}

const showStudents=async (req,res)=>{
  try {
    const ment = await mentor
      .findById(req.params.id)
      .populate("studentsAssigned", "name");
    res.send(ment);
  } catch (e) {
    console.log(e, "error");
    res.status(500).send("error in for 1 mentor get all students");
  }
}

const assignMentor=async(req,res)=>{
  try {
    
    const mentorData = await mentor.findById(req.body.mentorId);
    mentorData.studentsAssigned = [
      ...mentorData.studentsAssigned,
      ...req.body.studentsArray,
    ];
    mentorData.save();
    
    req.body.studentsArray.forEach(async (stud) => {
      const temp = await student.findById(stud);
      temp.mentorAssigned = req.body.mentorId;
      temp.save();
    });

    res.send("Mentor Added to Students and updated in mentor document too");
  } catch (e) {
    console.log(e, "error in assignmentor route");
    res.status(400).send("error");
  }
}

module.exports = { createStudent,getStudent ,createMentor,getMentor,showStudents,assignMentor};
