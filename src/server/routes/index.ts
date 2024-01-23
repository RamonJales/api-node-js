import {Router} from "express";
import { ControllersCitys } from "./../controllers";

const router = Router();

router.get("/", (req, res) => {return res.send("Working!");});

router.post("/api",ControllersCitys.createBodyValidator, ControllersCitys.create);

export {router};