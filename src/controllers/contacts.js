import { getAllContacts, getContactById } from '../services/contacts.js';

//Get all contacts CONTROLLER
export const getContactsController = async (req, res) => {
  const contacts = await getAllContacts();

  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

//Get a contact by ID CONTROLLER
export const getContactByIdController = async (req, res) => {
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
};
