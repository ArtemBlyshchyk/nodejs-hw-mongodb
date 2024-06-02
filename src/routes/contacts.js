import { Router } from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

//Route to get all contacts
router.get('/contacts', ctrlWrapper(getContactsController));

// Route to get a contact by ID
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

// Route for create a contact
router.post('/contacts', ctrlWrapper(createContactController));

export default router;
