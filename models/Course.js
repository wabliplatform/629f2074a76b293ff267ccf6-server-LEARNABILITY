
const { CourseCourseImageSchema } =require('./CourseCourseImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
Underscoreid:String , 


courseTitle:String , 


courseImage:  
CourseCourseImageSchema
 , 


courseDescription:String , 


courseDate:String 



})

module.exports = {
  Course : mongoose.model('course', courseSchema),
}

