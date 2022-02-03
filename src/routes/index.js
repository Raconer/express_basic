import express from 'express';
import logger from "../../logger/index";
import main from "./main";
import temp from "./temp";
import temp2 from "./temp2";

const router = express.Router();


router.all(["/main","/temp"],  function(req, res, next){
    logger.info("Test Handler")
    next();
});

router.use("/temp", temp);
router.use("/main", main);
router.use("/auth", temp2);

export default router;