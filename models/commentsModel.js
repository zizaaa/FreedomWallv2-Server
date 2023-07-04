const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    to:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    theme:{
        type:String,
        required:true
    },
    emoji:{
        type:String,
        required:true
    }
},
    {
    timestamps:true
    }
)

const Comments = mongoose.model('Comments',commentSchema)

module.exports = Comments