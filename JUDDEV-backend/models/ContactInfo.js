const mongoose = require('mongoose');

const contactInfoSchema = new mongoose.Schema({
  email: { type: String, default: 'juddevcorporation03@gmail.com' },
  phone: { type: String, default: '+237 672 600 193' },
  address: { type: String, default: 'Yaoundé, Cameroun' },
  hours: { type: String, default: 'Lun - Ven: 8h00 - 18h00' },
  social: {
    linkedin: { type: String, default: '#' },
    twitter: { type: String, default: '#' },
    github: { type: String, default: '#' },
    instagram: { type: String, default: '#' },
    facebook: { type: String, default: '#' },
    youtube: { type: String, default: '#' },
    whatsapp: { type: String, default: '#' }
  },
  partners: [{
    name: { type: String, default: '' },
    image: { type: String, default: '' },
    url: { type: String, default: '#' }
  }]
}, { timestamps: true });

module.exports = mongoose.model('ContactInfo', contactInfoSchema);
