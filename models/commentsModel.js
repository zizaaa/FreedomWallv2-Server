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
    },
    seen:{
        type:Boolean,
        required:false
    },
    reply:{
        type:Array,
        required:false
    },
    from:{
        type:String,
        required:false
    }
},
    {
    timestamps:true
    }
)

const Comments = mongoose.model('Comments',commentSchema)

module.exports = Comments