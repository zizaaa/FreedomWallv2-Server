const express = require('express')
const { getAll,addMethod,editMethod,deleteMethod } = require('../controllers/commentsControl')
const router = express.Router()

    router.get('/api/comments',getAll)

    router.post('/api/comment',addMethod)

    router.put('/api/comment/:id',editMethod)

    router.delete('/api/comment/:id',deleteMethod)

module.exports = router