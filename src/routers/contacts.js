import { Router } from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

//authenticate
router.use(authenticate);

//Route to get all contacts we (removed "/contacts")
router.get('/', ctrlWrapper(getContactsController));

// Route to get a contact by ID (removed "/contacts")
router.get('/:contactId', ctrlWrapper(getContactByIdController));

// Route for create a contact (removed "/contacts")
router.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

// Route for partialy update (PATCH) a contact (removed "/contacts")
router.patch(
  '/:contactId',
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

// Route for delete a contact (removed "/contacts")
router.delete('/:contactId', ctrlWrapper(deleteContactController));

export default router;
