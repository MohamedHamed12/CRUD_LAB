const Site = require('../models/site');

exports.createSite = async (req, res) => {
  const { siteAddress, person_idperson } = req.body;
  try {
    const siteId = await Site.create(siteAddress, person_idperson);
    res.status(201).json({ id: siteId });
  } catch (error) {
    console.error('Error creating site:', error);
    res.status(500).json({ error: 'Could not create site' });
  }
};

exports.getAllSites = async (req, res) => {
  try {
    const sites = await Site.getAll();
    res.json(sites);
  } catch (error) {
    console.error('Error getting sites:', error);
    res.status(500).json({ error: 'Could not get sites' });
  }
};

// Implement other controller methods (update, delete) as needed
