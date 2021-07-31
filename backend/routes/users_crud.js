const express = require("express");
const router = express.Router();
const con = require("../db");

//create user
router.post("/create",(req,res)=>{
   const firstname = req.body.firstname;
   const lastname = req.body.lastname;
   const email = req.body.email;
   const contact = req.body.contact;

   con.query(
       "INSERT INTO users (first_name,last_name,email_address,phone_no) VALUES (?,?,?,?)",
       [firstname,lastname,email,contact],
       (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
   );

});

//view user
router.get("/read",(req,res)=>{
    con.query(
        "SELECT * FROM users",
        (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
    );
});

//update user
router.put("/update",(req,res)=>{
    const user_id = req.body.user_id;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const contact = req.body.contact;

    con.query(
        "UPDATE users SET first_name=? , last_name=? , email_address=? , phone_no=? WHERE user_id = ? ",
        [firstname,lastname,email,contact,user_id],
        (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
    );
});

//delete user
router.delete("/delete/:user_id",(req,res)=>{
    const user_id = req.params.user_id;
    
    con.query(
        "DELETE FROM users WHERE user_id = ?",
        user_id,
        (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
    );
});

module.exports = router;