const Language = require('../models/language');

exports.createLanguage = async (req, res) => {
  const { languageName, person_idperson } = req.body;
  try {
    const languageId = await Language.create(languageName, person_idperson);
    res.status(201).json({ id: languageId });
  } catch (error) {
    console.error('Error creating language:', error);
    res.status(500).json({ error: 'Could not create language' });
  }
};

exports.getAllLanguages = async (req, res) => {
  try {
    const languages = await Language.getAll();
    res.json(languages);
  } catch (error) {
    console.error('Error getting languages:', error);
    res.status(500).json({ error: 'Could not get languages' });
  }
};

