const router = require("express").Router();
const authorize = require("../middleware/authorize");
const con = require("../db");

router.get("/", authorize, async (req, res) => {
  try {
    const user = await con.query(
      "SELECT user_name FROM users WHERE user_id = ?",
      [req.user] 
    ); 
    
  //if would be req.user if you change your payload to this:
    
  //   function jwtGenerator(user_id) {
  //   const payload = {
  //     user: user_id
  //   };
    
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

module.exports = router;
