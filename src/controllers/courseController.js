const Course = require('../models/course');

exports.createCourse = async (req, res) => {
  const { courseName, person_idperson } = req.body;
  try {
    const courseId = await Course.create(courseName, person_idperson);
    res.status(201).json({ id: courseId });
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ error: 'Could not create course' });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.getAll();
    res.json(courses);
  } catch (error) {
    console.error('Error getting courses:', error);
    res.status(500).json({ error: 'Could not get courses' });
  }
};

// Implement other controller methods (update, delete) as needed
