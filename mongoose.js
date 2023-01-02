//Requiring the Library
const mongoose=require('mongoose');

//connect to the database

mongoose.connect('mongodb://127.0.0.1:27017/contactlist_db');

//acquire the connection (to check if it is successfull or not)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connection'));

//Up and running then print the message
db.once('open',function()
{
    console.log("successfully connected to db");

});