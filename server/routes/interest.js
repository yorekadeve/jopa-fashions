const express = require('express')
const router = express.Router()
const { submitInterest } = require('../controllers/interestController')

router.post('/', submitInterest)

module.exports = router