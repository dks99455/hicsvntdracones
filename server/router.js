const express = require('express');
const router = express.Router();
const { getReports, postReport } = require('./controller.js');

router.get('/report', getReports);
router.post('/report', postReport);

module.exports = router;