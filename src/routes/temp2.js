import express from 'express';
import logger from '../../logger/index';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.info("Temp 2 Log")
  res.send('respond with a resource');

});

export default router;