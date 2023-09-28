const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: String,
  level: String,
  description:String,
  image: Buffer,
  

  
});

module.exports = mongoose.model('Skill', skillSchema);

