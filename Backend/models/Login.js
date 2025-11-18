import mongoose from 'mongoose'


const Login = new mongoose.Schema({
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
const login = new mongoose.model('login',Login);

module.exports= login;