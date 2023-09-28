const express = require('express');
const Skill = require('../models/Skill');

const router = express.Router();

const multer = require('multer');
const path = require('path');
const fs = require('fs');


// Create a new record
router.post('/', async (req, res) => {
  try {
    const newSkill = new Skill({
      name: req.body.name,
      level: req.body.level,
      description: req.body.description,
    });

    const savedSkill = await newSkill.save();
    res.status(201).json(savedSkill);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create skill record' });
  }
});

// Get all records
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve skill records' });
  }
});

// Get a single record
router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ error: 'Skill record not found' });
    }
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve skill record' });
  }
});

// Update a record
router.put('/:id', async (req, res) => {
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        level: req.body.level,
        description: req.body.description,
      },
      { new: true }
    );

    if (!updatedSkill) {
      return res.status(404).json({ error: 'Skill record not found' });
    }
    res.status(200).json(updatedSkill);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update skill record' });
  }
});

// Delete a record
router.delete('/:id', async (req, res) => {
  try {
    const deletedSkill = await Skill.findByIdAndDelete(req.params.id);

    if (!deletedSkill) {
      return res.status(404).json({ error: 'Skill record not found' });
    }
    res.status(200).json({ message: 'Skill record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete skill record' });
  }
});




///////////////////////////////


// Create a directory to store uploaded images
const uploadDirectory = path.join(__dirname, '..', 'uploads');
fs.mkdirSync(uploadDirectory, { recursive: true });

// Configure multer to handle file uploads
// const storage = multer.diskStorage({
//   destination: uploadDirectory,
//   filename: (req, file, cb) => {
//     // Generate a unique filename for the uploaded image
//     const filename = `${Date.now()}-${file.originalname}`;
//     cb(null, filename);
//   },
// });



const storage = multer.memoryStorage(); // Store the image in memory as a buffer
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
      image: req.file.buffer, // Store the image buffer in the skill object
    });

    // Save the skill object to the database
    const savedSkill = await newSkill.save();
    res.status(201).json(savedSkill);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create skill record' });
  }
});

// Add other skill routes (e.g., GET, PUT, DELETE) as needed

module.exports = router;


