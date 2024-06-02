//import the HttpError class to handle HTTP errors.
import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  //Checking if we got the error from createHttpError (see folder with Controllers)
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }

  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    error: err.message,
  });
};
