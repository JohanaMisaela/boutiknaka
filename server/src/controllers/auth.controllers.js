const con = require("../config/db");
const bcrypt = require("bcrypt");
const jswt =require('jsonwebtoken')
require('dotenv').config()
const saltRounds = 10;



exports.register = (req, res) => {
  console.log(req.body);
  const date = new Date()
  const formattedDate = date.toISOString().slice(0, 19).replace('T', ' '); 
  console.log(formattedDate)
  const emailRegister = req.body.emailRegister;
  const passwordRegister = req.body.passwordRegister;

  bcrypt.hash(passwordRegister, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    con.query(
      "INSERT INTO user (id,email,password,type,prenom,nom,adresse,date) VALUES(?,?,?,?,?,?,?,?)",
      [null,emailRegister, hash,'client','','','',formattedDate],
      (err, result) => {
        console.log(err);
      }
    );
  });
};



exports.login = (req, res) => {
  
  const email = req.body.email;
  const password = req.body.password;

  

  con.query("SELECT * FROM user WHERE email=? ", email, (err, result) => {
    if (err) {
      req.setEncoding({ err: err });
    }
     
    if (result) {
      bcrypt.compare(password, result[0].password, (err, reponse) => {
        if (reponse) {
            req.session.user = result
             console.log(req.session.user);
            res.status(200).json({
              /* add token */
               token:jswt.sign({
                   nom:result[0].mom,
                   type:result[0].type,
                   email:result[0].email
               },process.env.jwtkey),
               data :req.session.user
            })

        } else {
          res.send({ message: "wrong username / wrong password" });
        }
      });
    } else {
      res.send({ message: "User doesnt exist" });
    }
  });
};


exports.loged = (req,res)=>{

   if(req.session.user){
      res.send({loggedIn:true, user:req.session.user})
   }else{
        res.send({loggedIn:false})
   }
}

exports.getUerRole = (req, res) => {
  let authorization = req.headers.authorization.replace("bearer= ",'');

  let cookie_parsing = jswt.verify(authorization,process.env.jwtkey);

  res.status(200).json({
    role : cookie_parsing.type
  });
}


exports.getAllUserData = (req,res)=>{
    
  con.query('SELECT * FROM user WHERE type="client"',(err,result)=>{
       
       if(result){
          res.status(200).json(result)
        }else{

          res.send({error:'aucun data '})
        }

  })
   
}


exports.deleteUser = (req,res)=>{
     const {id} = req.params
    con.query(`DELETE FROM user WHERE id=${id}`,(error,result)=>{
      if(result){
        res.status(200).json(result)
      }else{
        res.send({error:'impossible de supprimer'})
      }
    })
    
}