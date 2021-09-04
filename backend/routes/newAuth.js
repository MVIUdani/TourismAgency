const con = require("../db");

const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = function(app){

    // ***this is customer signup***
    app.post("/cus-signup", (req, res) => {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const address = req.body.address;
        const city_name = req.body.city_name;
        const country = req.body.country;
        const username = req.body.username;
        const password = req.body.password;
      
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            console.log(err);
          }
      
          con.query(
            "INSERT INTO users (first_name,last_name,email_address, address, city_name, country, user_name, user_password,role_id) VALUES (?,?,?,?,?,?,?,?,'1')",
            [firstname, lastname, email, address, city_name, country, username, hash],
            (err, result) => {
              console.log(err);
            }
          );
        });
      });
     
      // ***this is hotel owner signup***
      app.post("/hotelowner-signup", (req, res) => {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        const hotel = req.body.hotel;
        const hotelcontact = req.body.hotelcontact;
        const address = req.body.address;

        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            console.log(err);
          }
      
          con.query(
            "INSERT INTO users (first_name,last_name,email_address,user_name, user_password,hotel_name,hotel_contact_no,city,role_id) VALUES (?,?,?,?,?,?,?,?,'5')",
            [firstname, lastname, email, username, hash, hotel, hotelcontact, address],
            (err, result) => {
              console.log(err);
            }
          );
        });
      });

      // ***this is guide signup***
      app.post("/guide-signup", (req, res) => {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        const nic = req.body.nic;
        const birthday = req.body.birthday;

        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            console.log(err);
          }
      
          con.query(
            "INSERT INTO users (first_name,last_name,email_address,user_name, user_password,nic,birthday,role_id) VALUES (?,?,?,?,?,?,?,'3')",
            [firstname, lastname, email, username, hash, nic, birthday],
            (err, result) => {
              console.log(err);
            }
          );
        });
      });

      // ***this is transport owner signup***
      app.post("/transportowner-signup", (req, res) => {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        const nic = req.body.nic;
        const birthday = req.body.birthday;

        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            console.log(err);
          }
      
          con.query(
            "INSERT INTO users (first_name,last_name,email_address,user_name, user_password,nic,birthday,role_id) VALUES (?,?,?,?,?,?,?,'4')",
            [firstname, lastname, email, username, hash, nic, birthday],
            (err, result) => {
              console.log(err);
            }
          );
        });
      });


      app.get("/sign-in", (req, res) => {
        if (req.session.user) {
          res.send({ loggedIn: true, user: req.session.user });
        } else {
          res.send({ loggedIn: false });
        }
      });
      
      app.post("/sign-in", (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
      
        con.query(
          "SELECT * FROM users WHERE email_address = ?;",
          email,
          (err, result) => {
            if (err) {
              res.send({ err: err });
            }
      
            if (result.length > 0) {
              bcrypt.compare(password, result[0].user_password, (error, response) => {
                if (response) {
                  req.session.user = result;
                  console.log(req.session.user);
                  res.send(result);
                } else {
                  res.send({ message: "Wrong email/password combination!" });
                }
              });
            } else {
              res.send({ message: "User doesn't exist" });
            }
          }
        );
      });


};