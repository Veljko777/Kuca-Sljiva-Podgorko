const express = require("express");
const jwt=require("jsonwebtoken")
const cors = require("cors");
const bodyParser = require ("body-parser");
const nodemailer = require ("nodemailer");
const mongoose=require("mongoose")
const passport=require("passport")
const localStrategy=require("passport-local")
const app=express();
const User=require("./models/user")
const cookieParser=require("cookie-parser")

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true)

const bcrypt = require('bcrypt');
const saltRounds = 10;

const config={
    "secret":"supersecret"
}


app.use(require("express-session")({
    secret:"Dogs are the best pets",
    resave:false,
    saveUninitialized:false
}));
mongoose.connect("mongodb://localhost:27017/kuca-sljiva", {useNewUrlParser:true, useUnifiedTopology:true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(function(req,res,next){
    res.locals.currentUser=req.user;
    next();
})

app.get("/", function(req,res){
    res.send("landing page")
});

app.post("/createaccount", function(req,res){
    bcrypt.hash(req.body.formValues.password, saltRounds, function(err, hash){
        const name=req.body.formValues.name
        const address=req.body.formValues.address
        const postal_code=req.body.formValues.postal_code
        const city=req.body.formValues.city
        const phone=req.body.formValues.phone
        const email=req.body.formValues.email
        const newUser=new User({username:name, address, postal_code, city, phone, email, password:hash})
        User.create(newUser, function(err, newUser){
            if(err){
                console.log(err);
                res.send(err)
            }else{
                res.send("user added to db")
                
            }
        });
    });
});

app.post("/login",  function(req,res){
    User.findOne({"email": req.body.formValues.email},  function(err, user){
        if(err) return res.status(500).send("Error on the server");
        if(!user) return res.status(200).send({auth:false,token:null});
        const passwordIsValid=bcrypt.compareSync(req.body.formValues.password, user.password)
        if(passwordIsValid) {
            const token=jwt.sign({id:user._id}, config.secret,{expiresIn:86400});
            return res.status(200).send({auth:true, token:token})};
           
        res.status(200).send({auth:false, token:null})
    })
})



app.post("/me", function(req,res,next){
    const token=req.body.token
    const decodedtoken=jwt.decode(token)
    console.log(decodedtoken)
    if(!token)return res.status(200).send({auth:false, message:"no token provided"});
    User.findById(decodedtoken.id,{password:0}, function(err,user){
            if(err)return res.status(500).send("there was a problem finding the user");
            if(!user)return res.status(200). send("no user found");
            res.status(200).send({auth:true, user:user})
        
    })
})


app.post("/contactus", function(req,res){
    var query1=req.body.formValues.name
    if(req.body.formValues.phone===undefined){
        var query5=" "
    }else{
        var query5=req.body.formValues.phone
    }
    var query2=req.body.formValues.email
    var query3=req.body.formValues.subject
    var query4=req.body.formValues.description
    
    
    var transporter=nodemailer.createTransport({
        service:"gmail",
        secure:false,
        port:25,
        auth:{
            user:"",
            pass:""
            },
        rejectUnauthorized:false
        })
    const mailOptions={
        from:"",
        to:"veljkorankovic@gmail.com",
        subject:query3,      
        html:"<h2>"+query3+"</h2>"+ "<p>"+query4+"</p>"+"<br><h3>"+query1+"</h3>"+"<h4>Email pošiljaoca: "+query2+"</h4>"+"<h4>Telefon: "+query5
        }
    transporter.sendMail(mailOptions,function(err,info){
        if(err)
        console.log(err)
        else
        console.log(info)
    })
    res.send("poruka poslata")
})



app.listen(3001, function(){
    console.log("SERVER STARTED!!!!!!")
})