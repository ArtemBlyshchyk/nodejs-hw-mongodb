import { Router } from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

//Route to get all contacts
router.get('/contacts', ctrlWrapper(getContactsController));

// Route to get a contact by ID
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

// Route for create a contact
router.post('/contacts', ctrlWrapper(createContactController));

// Route for partialy update (PATCH) a contact
router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

// Route for delete a contact
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default router;
