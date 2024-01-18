import {Router} from "express";

const router = Router();

router.get("/api", (req, res) => {return res.send("Hello!");});

router.post("/api", (req, res) => {
	console.log(req.body);
	return res.json(req.body);
});

export {router};