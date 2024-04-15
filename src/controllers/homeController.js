

// homeController.js
const path = require('path');
const Person = require('../models/person');
const Language = require('../models/language');
const Course = require('../models/course');
const Hobby = require('../models/hobby');
const Site = require('../models/site');
const App = require('../models/app');
const Project = require('../models/project');
exports.getHome = (req, res) => {
  //   res.sendFile(path.join(__dirname, '..', '', 'index.html'));
  res.sendFile(path.join(__dirname, '../', 'templates', 'index.html'));

};

exports.submitForm = (req, res) => {
  const createPerson = async (fName, lName, Address, city, country, Email) => {
    try {
      const person_id = await Person.create(fName, lName, Address, city, country, Email);
      
      const person = await Person.getById(person_id);
      return person;
    } catch (error) {
      console.error("Error creating person:", error);
      throw error;
    }
  };

  const createCourse = async (courseName, person) => {
    try {
      const course_id = await Course.create(courseName, person);
     
      const course = await Course.getById(course_id);
      return course;
    } catch (error) {
      console.error("Error creating course:", error);
      throw error;
    }
  };

  const createHobby = async (hobbyName, person) => {
    try {
      const hobby_id = await Hobby.create(hobbyName, person);
      const hobby = await Hobby.getById(hobby_id);
      return hobby;
    } catch (error) {
      console.error("Error creating hobby:", error);
      throw error;
    }
  };

  const createSite = async (siteAddress, person) => {
    try {
      const site_id = await Site.create(siteAddress, person);
      const site = await Site.getById(site_id);
      return site;
    } catch (error) {
      console.error("Error creating site:", error);
      throw error;
    }
  };

  const createApp = async (appName, person) => {
    try {
      const app_id = await App.create(appName, person);
      const app = await App.getById(app_id);
      return app;
    } catch (error) {
      console.error("Error creating app:", error);
      throw error;
    }
  };

  const createProject = async (projectName, person) => {
    try {
      const project_id = await Project.create(projectName, person);
      const project = await Project.getById(project_id);
      return project;
    } catch (error) {
      console.error("Error creating project:", error);
      throw error;
    }
  };

  const processData = async (req, res) => {
    try {
      const person = await createPerson(req.body.fName, req.body.lName, req.body.Address, req.body.city, req.body.country, req.body.Email);
      const course = await createCourse(req.body.courseName, person);
      const hobby = await createHobby(req.body.hobbyName, person);
      const site = await createSite(req.body.siteAddress, person);
      const app = await createApp(req.body.appName, person);
      const project = await createProject(req.body.projectName, person);

      const data = {
        person,
        course,
        hobby,
        site,
        app,
        project
      };
      res.send(data);
    } catch (error) {
      console.error("Error processing data:", error);
      res.status(500).send("Internal Server Error");
    }
  };

  processData(req, res);

}
