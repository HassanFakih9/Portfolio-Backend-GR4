const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  company_name: String,
  job_title: String,
  start_date: Date,
  end_date: Date,
  accomplishments: [String],
});

const Experience = mongoose.model('Experience', ExperienceSchema);

module.exports = Experience;
