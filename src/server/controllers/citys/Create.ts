import { Request, Response } from "express";

interface city {
	name: string;
}

export const create = (req: Request<{}, {}, city>, res: Response) => {
	console.log(req.body);
	return res.send("Created!");
};