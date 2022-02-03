import express from 'express';
import logger from '../../logger/index';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.info("Start Get");
  res.send('respond with a resource');

});

export default router;