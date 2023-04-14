const express = require('express');
const {createStudent,getStudent,createMentor,getMentor,showStudents,assignMentor} = require('../controllers/studentcontroller')
const router=express.Router();




router.post("/create-stud",createStudent)
router.get("/get-stud",getStudent)
router.post("/create-mentor",createMentor)
router.get("/get-mentor",getMentor)
router.get("/:id",showStudents)
router.post("/assign-mentor",assignMentor)
module.exports=router