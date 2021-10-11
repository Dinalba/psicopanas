const { Router } = require('express');
const router = Router();

const { getEntrys, createEntry, getEntry, updateEntry } =require('../controllers/entry.controller');

router.route('/')
    .get(getEntrys)
    .post(createEntry)

router.route('/:id')    
    .put(updateEntry)
    .get(getEntry)

module.exports = router;