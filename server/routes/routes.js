const express = require('express');
const router = express.Router();
const API = require('../controllers/api.js');

router.get('/', API.fetchAllPost);
router.get('/:id', API.fetchPostDetail);
router.post('/', API.createPost);
router.patch('/:id', API.updatePost);
router.delete('/:id', API.deletePost);

module.exports = router;
