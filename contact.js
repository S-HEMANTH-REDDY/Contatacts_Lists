const mongoose =require('mongoose');
const contactschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});
// represents collection
const Contact=mongoose.model('Contact',contactschema);
module.exports=Contact;
