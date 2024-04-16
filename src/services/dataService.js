// services/dataService.js

const Hobby = require('../models/hobby');
const Site = require('../models/site');
const App = require('../models/app');
const Project = require('../models/project');
const Person = require('../models/person');
const Course = require('../models/course');

exports.createPerson = async (fName, lName, Address, city, country, Email) => {
  try {
    const person_id = await Person.create(fName, lName, Address, city, country, Email);
    const person = await Person.getById(person_id);
    return person;
  } catch (error) {
    console.error("Error creating person:", error);
    throw error;
  }
};

exports.createCourse = async (courseName, person) => {
  try {
    const course_id = await Course.create(courseName, person);
    const course = await Course.getById(course_id);
    return course;
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
};

// Similarly define createHobby, createSite, createApp, createProject, countNames, and countNames2 functions

exports.createHobby = async (hobbyName, person) => {
  try {
    const hobby_id = await Hobby.create(hobbyName, person);
    const hobby = await Hobby.getById(hobby_id);
    return hobby;
  } catch (error) {
    console.error("Error creating hobby:", error);
    throw error;
  }
};

exports.createSite = async (siteAddress, person) => {
  try {
    const site_id = await Site.create(siteAddress, person);
    const site = await Site.getById(site_id);
    return site;
  } catch (error) {
    console.error("Error creating site:", error);
    throw error;
  }
};

exports.createApp = async (appName, person) => {
  try {
    const app_id = await App.create(appName, person);
    const app = await App.getById(app_id);
    return app;
  } catch (error) {
    console.error("Error creating app:", error);
    throw error;
  }
};

exports.createProject = async (projectName, person) => {
  try {
    const project_id = await Project.create(projectName, person);
    const project = await Project.getById(project_id);
    return project;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};

