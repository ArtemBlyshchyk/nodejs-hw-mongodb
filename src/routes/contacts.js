import { Router } from 'express';
import {
  getContactsController,
  getContactByIdController,
} from '../controllers/contacts.js';

const router = Router();

//Route to get all contacts
router.get('/contacts', getContactsController);

// Route to get a contact by ID
router.get('/contacts/:contactId', getContactByIdController);

export default router;
