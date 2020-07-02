/* var express = require('express')
var router = express.Router()

router.get('/first', function (req, res) {
  res.send('first on user')
})

router.get('/second', function (req, res) {
  res.send('second on user')
})

router.get('/dog/walk', function (req, res) {
    res.send('WALK')
  })

  router.get('/play', function (req, res) {
    res.send('PLAY')
  })

  router.get('/eat', function (req, res) {
    res.send('EAT')
  })

  router.get('/sleep', function (req, res) {
    res.send('SLEEP')
  })

module.exports = router
 */

const express = require('express')
const { index }  = require('../controllers/userController')
const router = express.Router()

router.get('/', index)

module.exports = router

