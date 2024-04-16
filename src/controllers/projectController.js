const Project = require('../models/project');

exports.createProject = async (req, res) => {
  const { projectName, person_idperson } = req.body;
  try {
    const projectId = await Project.create(projectName, person_idperson);
    res.status(201).json({ id: projectId });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Could not create project' });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.getAll();
    res.json(projects);
  } catch (error) {
    console.error('Error getting projects:', error);
    res.status(500).json({ error: 'Could not get projects' });
  }
};

// Implement other controller methods (update, delete) as needed
