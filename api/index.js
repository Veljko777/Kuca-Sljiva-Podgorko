const express = require("express");
const jwt=require("jsonwebtoken")
const cors = require("cors");
const bodyParser = require ("body-parser");
const nodemailer = require ("nodemailer");
const app=express();
const cookieParser=require("cookie-parser")
const mysql=require("mysql");


const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"secret",
    database:"podgorko",
    multipleStatements:true
});
db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mySql connected")
    }
});


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
app.use(cookieParser());
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get("/products", (req,res)=>{
    db.query("SELECT * FROM products", (err,rows,fields)=>{
        if(err){
            console.log(err)
        }else{
            res.send(rows)
        }
    })
})

app.get("/products/:id", (req,res)=>{
    db.query("SELECT * FROM products WHERE productID=?", [req.params.id], (err, rows,fields)=>{
        if(err){
            console.log(err)
        }else{
            res.send(rows[0])
        }
    })
})

app.post("/createcomment", (req,res)=>{
const comment={
    ID:0,
    productID:req.body.productID,
    raiting:req.body.formValues.raiting,
    description:req.body.formValues.description,
    name:req.body.formValues.name
    }
    const sql="SET @ID=?; SET @productID=?; SET @raiting=?; SET @description=?; SET @name=?; CALL CreateComment(@ID,@productID,@raiting,@description,@name);"
    db.query(sql,[comment.ID, comment.productID, comment.raiting, comment.description, comment.name], (err, rows, fields)=>{
        if(err){
            let response="Something went wrong"
            res.send(response)
        }else{
            let response="ok"
            res.send(response)
            console.log("comment created")
        }
    })
})
app.get("/comments/:id", (req,res)=>{
    db.query("SELECT * FROM comments WHERE productID=?", [req.params.id], (err, rows,fields)=>{
        if(err){
            console.log(err)
        }else{
            res.send(rows)
        }
    })
})

app.post("/createaccount", (req,res)=>{
    bcrypt.hash(req.body.formValues.password, saltRounds, function(err, hash){
        const user={
            userID:0,
            username:req.body.formValues.name,
            address:req.body.formValues.address,
            postal_code:req.body.formValues.postal_code,
            city:req.body.formValues.city,
            phone:req.body.formValues.phone,
            email:req.body.formValues.email
                    }
        const sql="SET @userID=?; SET @username=?; SET @address=?; SET @postal_code=?; SET @city=?; SET @phone=?; SET @email=?; SET @password=?; CALL UserAddOrEdit(@userID,@username,@address,@postal_code,@city,@phone,@email,@password);"
        db.query(sql,[user.userID, user.username, user.address, user.postal_code, user.city, user.phone, user.email, hash], (err, rows, fields)=>{
            let response=""
            if(err){
                if(err.errno===1062){
                    response="Email already exists"
                    res.send(response)  }
                else{
                    response="something else went wrong"
                    res.send(response)
                } 
            }
            else{
                response="ok"
                res.send(response);
                console.log("user created")
            }
        })
    }) 
});


app.post("/login",  (req,res)=>{
    db.query("SELECT * FROM users WHERE email=?",[req.body.formValues.email],(err, row, fields)=>{
        if(err){
            console.log(err)
            return res.status(500).send("Error on the server");
        }if(!row) return res.status(200).send({auth:false,token:null});
        if(row[0]===undefined)return res.status(200).send({auth:false,token:null});
        const passwordIsValid=bcrypt.compareSync(req.body.formValues.password, row[0].password)
        if(passwordIsValid) {
            const token=jwt.sign({id:row[0].userID}, config.secret,{expiresIn:86400});
            return res.status(200).send({auth:true, token:token})};
    
        res.status(200).send({auth:false, token:null})
        
    })
})


app.post("/me", (req,res,next)=>{
    const token=req.body.token
    if(!token)return res.status(200).send({auth:false, message:"no token provided"});
    const decodedtoken=jwt.decode(token)
    db.query("SELECT * FROM users WHERE userID=?", [decodedtoken.id], (err, row, fields)=>{
        let data={userID:row[0].userID, username:row[0].username, address:row[0].address, 
            postal_code:row[0].postal_code, city:row[0].city, phone:row[0].phone, email:row[0].email}
        if(err)return res.status(500).send("there was a problem finding the user");
        if(!row)return res.status(200).send("no user found");
        res.status(200).send({auth:true,user:data})
    })
})


//=====================================
//ADD USER AND PASS TO TRANSPORTER
//=====================================
app.post("/contactus", (req,res)=>{
    const query1=req.body.formValues.name
    if(req.body.formValues.phone===undefined){
        const query5=" "
    }else{
        const query5=req.body.formValues.phone
    }
    const query2=req.body.formValues.email
    const query3=req.body.formValues.subject
    const query4=req.body.formValues.description
    
    
    const transporter=nodemailer.createTransport({
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
        html:"<h2>"+query3+"</h2>"+ "<p>"+query4+"</p>"+"<br><h3>"+query1+"</h3>"+"<h4>Email pošiljaoca: "+query2+"</h4>"+"<h4>Telefon: "+query5+"</h4>"
        }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err)
        console.log(err)
        else
        console.log(info)
    })
    res.send("poruka poslata")
})


app.post("/createorder", (req,res)=>{
    const rawdata=req.body.data
    var data=""
    rawdata.forEach(element => {
           let name=element.name
           let qty=element.qty
           let price=element.price
        var alldata="Naziv: "+name+" Kolicina: "+qty+" Cena: "+price+" din."
        data+="<p>"+alldata+"</p>"
    });
    console.log(data)
    const query1=req.body.formValues.name

    const query2=req.body.formValues.address
    const query3=req.body.formValues.postal_code
    const query4=req.body.formValues.city
    if(req.body.formValues.phone===undefined){
        var query5=" "
    }else{
        var query5=req.body.formValues.phone
    }
    const query6=req.body.formValues.email
    const query7=req.body.formValues.description
    
    
    const transporter=nodemailer.createTransport({
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
        subject:"PORUDZBINA",      
        html:"<h2>Poruzbina</h2><br>"+data+"<h4>Ime: "+query1+"</h4><h4>Adresa: "+query2+"</h4><h4>Postanski broj: "+query3+"</h4><h4>Grad: "+query4+"</h4><h4>Telefon: "+query5+"</h4><h4>Email: "+query6+"</h4><h3>Napomena:"+query7
        }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err)
        console.log(err)
        else
        console.log(info)
    })
    res.send("poruka poslata")
})






app.listen(3001, ()=>{
    console.log("SERVER STARTED!!!!!!")
})