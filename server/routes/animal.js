const express = require('express');
const { createAnimal, getAnimals, getAnimal } = require('../controllers/animal.js');

const router = express.Router();

router.post('/', createAnimal);
router.get('/', getAnimals);
router.get('/:id', getAnimal);



module.exports = router;