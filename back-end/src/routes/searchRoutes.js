const express = require('express')
const router = express.Router()
const {perform_search} = require('../controllers/searchController')

router.get('/:search_input/:page', perform_search)

module.exports = router