/**
 * The CourseController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CourseService');
const createcourse = async (request, response) => {
  await Controller.handleRequest(request, response, service.createcourse);
};

const deletecourse = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletecourse);
};

const getAllcourse = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllcourse);
};

const getcourse = async (request, response) => {
  await Controller.handleRequest(request, response, service.getcourse);
};

const updatecourse = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatecourse);
};


module.exports = {
  createcourse,
  deletecourse,
  getAllcourse,
  getcourse,
  updatecourse,
};
