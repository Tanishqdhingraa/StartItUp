import mongoose from 'mongoose'


const Sign = new mongoose.Schema({
    emailaddress:{
        type: String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }

})
const sign = new mongoose.model('sign',Sign);

module.exports= sign;