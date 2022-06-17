/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Course } = require('../models/Course');

/**
* Creates the data
*
* course Course data to be created
* returns course
* */
const createcourse = ({ course }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Course(course).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* courseId String the Id parameter
* no response value expected for this operation
* */
const deletecourse = ({ courseId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Course.findOneAndDelete({ _id:courseId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllcourse = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Course.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* courseId String the Id parameter
* returns course
* */
const getcourse = ({ courseId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Course.findById(courseId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* courseId String the Id parameter
* course Course data to be updated (optional)
* returns course
* */
const updatecourse = ({ courseId, course }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Course.findOneAndUpdate({ _id:courseId },course).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createcourse,
  deletecourse,
  getAllcourse,
  getcourse,
  updatecourse,
};
