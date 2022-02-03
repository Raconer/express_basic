import express from 'express';
import logger from '../../logger/index';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  logger.info('Start Temp');
  res.json('temp');
});

export default router;