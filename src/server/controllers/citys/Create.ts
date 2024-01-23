import { Request, Response } from "express";
import * as yup from "yup";

interface city {
	name: string;
}

const bodyValidation: yup.ObjectSchema<city> = yup.object().shape({
	name: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, city>, res: Response) => {
	let validatedData: city | undefined = undefined;
	
	try {
		validatedData = await bodyValidation.validate(req.body);
	} catch (error) {
		const yupError = error as yup.ValidationError;
		return res.json({
			errors: {
				default: yupError.message,
			}
		});
	}
	
	console.log(validatedData);
	return res.send("Created!");
};