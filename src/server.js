import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { getAllContacts, getContactById } from './services/contacts.js';

import { env } from './utils/env.js';

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

  //Route to get all contacts
  app.get('/contacts', async (req, res) => {
    const contacts = await getAllContacts();

    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  });

  // Route to get a contact by ID
  app.get('/contacts/:contactId', async (req, res) => {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);

    if (contact) {
      res.status(200).json({
        status: 200,
        message: `Successfully found contact with id ${contactId}!`,
        data: contact,
      });
    } else {
      res.status(404).json({
        message: `Contact with id ${contactId} not found.`,
      });
    }
  });

  // Handling invalid routes
  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  //Handling error during the get query
  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  // Starting the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
