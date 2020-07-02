/* var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.status(200).json('Hello')
})

// ให้ไฟล์อื่นเข้าถึง
module.exports = router */

const express = require('express')
const router = express.Router()
const { index,getPostById, createPost,updatePost ,deletePost }    = require('../controllers/postController')

router.get('/', index)
router.get('/:id', getPostById)
router.post('/', createPost)
router.put('/', updatePost)
router.delete('/', deletePost)

module.exports = router


  

