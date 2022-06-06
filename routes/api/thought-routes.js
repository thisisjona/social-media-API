const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /thoughts/<thoughtId>
router.route(':thoughId').get(getThoughtById);

module.exports = router;