const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const authorSchema = new Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    cookbooks: [
        {
            ref: 'Cookbook',
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})


const Author = mongoose.model('Author', authorSchema)
module.exports = Author