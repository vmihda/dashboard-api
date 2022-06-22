import { NextFunction, Request, Response } from 'express';

export class IMiddleware {
	execute: (req: Request, res: Response, next: NextFunction) => void;
}
