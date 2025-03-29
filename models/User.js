const mongoose=require('mongoose')//connecting this model to mongodb 

//creating schema(scheema like table )
const UserSchema=mongoose.Schema({
    user:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})
//model is exported
module.exports=mongoose.model('User',UserSchema)