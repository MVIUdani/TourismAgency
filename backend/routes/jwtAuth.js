const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const con = require("../db");
const validInfo = require("../middleware/validInfo");
const jwtGenerator = require("../utils/jwtGenerator");
const authorize = require("../middleware/authorize");

//authorizeentication

router.post("/cus-signup", validInfo, async (req, res) => {
  // const { firstname,lastname,email, username, password } = req.body;

  try {
    const { firstname, lastname, email, username, password } = req.body;

    con.query("SELECT * FROM users WHERE email_address = ?", [email], function (err, result, fields) {
      if (err)
        throw err;
      if (result.length < 0) {
        return res.status(401).send("User already exist!");
      }
    });

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);


   /* const newUser = await con.query(
      "INSERT INTO users (first_name,last_name,email_address, user_password,user_name) VALUES (?,?,?, ?, ?) ",
      [firstname, lastname, email, bcryptPassword, username]
    );*/
    let token = null;
    con.query("INSERT INTO users (first_name,last_name,email_address, user_password,user_name,role_id) VALUES (?,?,?, ?, ?,'1') ", 
    [firstname, lastname, email, bcryptPassword, username],
      function (err, result, fields) {
        if (err)
          throw err;
        if (result) {
          token = jwtGenerator(result.insertId);
        }
      });

    if (token) {
      return res.json({ token });
    }


  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/guide-signup", validInfo, async (req, res) => {
  // const { firstname,lastname,email, username, password } = req.body;

  try {
    const { firstname, lastname, email, username, password, nic, birthday } = req.body;

    con.query("SELECT * FROM users WHERE email_address = ?", [email], function (err, result, fields) {
      if (err)
        throw err;
      if (result.length < 0) {
        return res.status(401).send("User already exist!");
      }
    });

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);


   /* const newUser = await con.query(
      "INSERT INTO users (first_name,last_name,email_address, user_password,user_name) VALUES (?,?,?, ?, ?) ",
      [firstname, lastname, email, bcryptPassword, username]
    );*/
    let token = null;
    con.query("INSERT INTO users (first_name,last_name,email_address, user_password,user_name,nic,birthday,role_id) VALUES (?,?,?, ?, ?,'3') ", 
    [firstname, lastname, email, bcryptPassword, username, nic, birthday],
      function (err, result, fields) {
        if (err)
          throw err;
        if (result) {
          token = jwtGenerator(result.insertId);
        }
      });

    if (token) {
      return res.json({ token });
    }


  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/sign-in", validInfo, async (req, res) => {
  //const { email, password } = req.body;

  try {
    const { email, password } = req.body;

  /*  const user = con.query("SELECT * FROM users WHERE email_address = ?", [
      email
    ]);*/

    con.query("SELECT * FROM users WHERE email_address = ?", [email], async function (err, result, fields) {
      if (err)
        throw err;
      if (result.length > 0) {
        const validPassword = await bcrypt.compare(
          password,
          result[0].user_password
        );

        if (!validPassword) {
          return res.status(401).json("Password or Email is incorrect");
        }
        const token = jwtGenerator(result[0].user_id);
        return res.json({ token });
      } else {
        return res.status(401).json("Password or Email is incorrect");
      }
    });


  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/verify", authorize, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
