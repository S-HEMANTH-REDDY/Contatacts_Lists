const express = require('express');
const path = require('path');
const port = 8001;

const db=require('./config/mongoose');
const Contact=require('./models/contact');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList = [
    {
        name: "Arpan",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Coding Ninjas",
        phone: "12131321321"
    }
]

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});


app.get('/', function(req, res){
    Contact.find({},function(err,contacts)
    {
        if(err)
        {
            console.log("Error in fetching contatcs from db");
            return;
        }
        return res.render('home',{
            title: "Contact List",
            contact_list:contacts
    });
    });
})
app.post('/create-contact', function(req, res){
    
    //contactList.push(req.body);
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,newContact)
    {
        if(err)
        {
            console.log("Error in creating contact");
            return ;
        }
        else
        console.log("*********",newContact);
        return res.redirect('/');
    });

});

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})


app.get('/delete-contact', function(req, res){
    //get the id from query in the url

    let id=req.query.id;
    //find the contact in the databse using id and delete
    Contact.findOneAndDelete(id,function(err)
    {
         if(err)
         {
            console.log('error in deleting an object from database');
            return ;
         }
         return res.redirect('back');
    });
});
