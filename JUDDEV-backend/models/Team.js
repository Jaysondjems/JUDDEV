const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, default: '' },
  initials: { type: String, default: '' },
  photo: { type: String, default: '' },
  tags: [{ type: String }],
  socials: {
    linkedin: { type: String, default: '#' },
    github: { type: String, default: '#' },
    twitter: { type: String, default: '#' },
    behance: { type: String, default: '' }
  },
  order: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Team', teamSchema);
