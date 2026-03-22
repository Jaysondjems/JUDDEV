const express = require('express');
const FAQ = require('../models/FAQ');
const auth = require('../middleware/auth');

const router = express.Router();

// GET /api/faq
router.get('/', async (req, res) => {
  try {
    const faqs = await FAQ.find().sort({ order: 1, createdAt: 1 });
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur.' });
  }
});

// POST /api/faq
router.post('/', auth, async (req, res) => {
  try {
    const { question, answer, order } = req.body;
    const id = `faq-${Date.now()}`;
    const faq = new FAQ({ id, question, answer, order: order || 0 });
    await faq.save();
    res.status(201).json(faq);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur: ' + err.message });
  }
});

// PUT /api/faq/:id
router.put('/:id', auth, async (req, res) => {
  try {
    const { question, answer, order } = req.body;
    const faq = await FAQ.findOneAndUpdate(
      { id: req.params.id },
      { question, answer, order: order || 0 },
      { new: true }
    );
    if (!faq) return res.status(404).json({ message: 'FAQ non trouvée.' });
    res.json(faq);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur: ' + err.message });
  }
});

// DELETE /api/faq/:id
router.delete('/:id', auth, async (req, res) => {
  try {
    const faq = await FAQ.findOneAndDelete({ id: req.params.id });
    if (!faq) return res.status(404).json({ message: 'FAQ non trouvée.' });
    res.json({ message: 'FAQ supprimée.' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur.' });
  }
});

module.exports = router;
