let express = require('express');
let router = express.Router();
let AuthService = require("../service/auth/index");

let authService = new AuthService();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Start Get");
  authService.selectList((data) =>{
    res.json(JSON.stringify(data));
  });
});

module.exports = router;
