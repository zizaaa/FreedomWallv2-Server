const Comments = require('../models/commentsModel')

    const getAll = async(req,res)=>{
        try {
            const comments = await Comments.find()
            res.status(200).json(comments)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }
    
    const addMethod = async(req,res)=>{
        try {
            const comments = await Comments.create(req.body)
            res.status(200).json(comments)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

    const editMethod = async(req,res)=>{
        try {
            const {id} = req.params;

            const comments = await Comments.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true})

            if(!comments){
                return res.status(404).json(`No comment with Id of ${id}`)
            }

            const updated = await Comments.findById(id)
            res.status(200).json(updated)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

    const deleteMethod = async(req,res)=>{
        try {
            const {id} = req.params;

            const comments = await Comments.findByIdAndDelete(id)

                if(!comments){
                    return res.status(404).json(`No comment with Id of ${id}`)
                }

            res.status(200).json(comments)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

module.exports = {
    getAll,addMethod,editMethod,deleteMethod
}