const path = require('path');
const { createPerson, createCourse, createHobby, createSite, createApp, createProject } = require('../services/dataService');
const { countNames, countNames2 } = require('../services/filterService');

exports.getHome = (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'templates', 'index.html'));
};



exports.submitForm = async (req, res) => {
  try {
    const { fName, lName, Address, city, country, Email, courseName, hobbyName, siteAddress, appName, projectName } = req.body;

    const person = await createPerson(fName, lName, Address, city, country, Email);
    const course = await createCourse(courseName, person);
    const hobby = await createHobby(hobbyName, person);
    const site = await createSite(siteAddress, person);
    const app = await createApp(appName, person);
    const project = await createProject(projectName, person);
    const countNamesResult = await countNames(fName);
    const countNames2Result = await countNames2(fName);

    const data = {
      person,
      course,
      hobby,
      site,
      app,
      project,
      countNames: countNamesResult,
      countNames2: countNames2Result
    };

    // console.log(data);

    res.render('result', data);
  } catch (error) {
    console.error("Error processing data:", error);
    res.status(500).send("Internal Server Error");
  }
};
