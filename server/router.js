const express = require('express');
const router = express.Router();
const { getReports, postReport } = require('./controller.js');

router.get('/sreport', getReports);
router.post('/sreport', postReport);

module.exports = router;