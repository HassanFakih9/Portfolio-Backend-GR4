const express = require('express');
const Skill = require('../models/Skill');

const router = express.Router();

const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure multer to handle file uploads
const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', 'uploads'),
  filename: (req, file, cb) => {
    // Generate a unique filename for the uploaded image
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

// Define a POST route for creating a skill with an associated image
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { name, level, description } = req.body;

    // Check if an image was uploaded
    if (!req.file) {
      return res.status(400).send('No image uploaded.');
    }

    // Create a new skill object with image information
    const newSkill = new Skill({
      name,
      level,
      description,
      image: req.file.filename, // Store the image filename in the skill object
    });

    // Save the skill object to the database
    const savedSkill = await newSkill.save();
    res.status(201).json(savedSkill);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create skill record' });
  }
});

// Define a GET route for getting all of the skills in the database
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();

    // Remove the image buffers from the response
    skills.forEach(skill => delete skill.image);

    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve skill records' });
  }
});

  

module.exports = router;
