import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import contactsRouter from './routes/contacts.js'; // import routers

import { env } from './utils/env.js';

//Import of middlewares
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

//Setting a port using an environment variable
const PORT = Number(env('PORT', '3000'));

//Function for configuring the server
export const setupServer = () => {
  const app = express();

  // Middleware for handling JSON
  app.use(express.json());

  // Middleware for handling CORS requests
  app.use(cors());

  // Logging with pino
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  //Route to get all contacts and get a contact by ID
  app.use(contactsRouter);

  // Handling invalid routes
  app.use('*', notFoundHandler);

  //Handling error during the get query
  app.use(errorHandler);

  // Starting the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
