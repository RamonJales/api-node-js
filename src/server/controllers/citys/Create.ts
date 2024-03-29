import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface city {
	name: string;
}

const bodyValidation: yup.ObjectSchema<city> = yup.object().shape({
	name: yup.string().required().min(3),
});

export const createBodyValidator: RequestHandler = async (req, res, next) => {	
	try {
		await bodyValidation.validate(req.body, {abortEarly: false});
		return next();
	} catch (error) {
		const yupError = error as yup.ValidationError;
		const errors: Record<string, string> = {};		

		yupError.inner.forEach(error => {
			if(!error.path) return;
			errors[error.path] = error.message;
		});

		return res.status(StatusCodes.BAD_REQUEST).json({errors});
	}
}

export const create = async (req: Request<{}, {}, city>, res: Response) => {	
	console.log(req.body);
	return res.send("Created!");
};