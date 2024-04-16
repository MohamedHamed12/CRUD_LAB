const App = require('../models/app');

exports.createApp = async (req, res) => {
  const { appName, person_idperson } = req.body;
  try {
    const appId = await App.create(appName, person_idperson);
    res.status(201).json({ id: appId });
  } catch (error) {
    console.error('Error creating app:', error);
    res.status(500).json({ error: 'Could not create app' });
  }
};

exports.getAllApps = async (req, res) => {
  try {
    const apps = await App.getAll();
    res.json(apps);
  } catch (error) {
    console.error('Error getting apps:', error);
    res.status(500).json({ error: 'Could not get apps' });
  }
};

// Implement other controller methods (update, delete) as needed
