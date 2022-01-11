import express from 'express';
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Start Get");
  res.send('respond with a resource');

});

export default router;