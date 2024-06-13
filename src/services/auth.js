import bcrypt from 'bcrypt';
import { UsersCollecttion } from '../db/models/users.js';
import createHttpError from 'http-errors';

export const registerUser = async (payload) => {
  //Checking the unique user email
  const user = await UsersCollecttion.findOne({
    email: payload.email,
  });

  if (user) throw createHttpError(409, 'Email in use');

  const encryptedPassword = await bcrypt.hash(payload.password, 10);

  return await UsersCollecttion.create({
    ...payload,
    password: encryptedPassword,
  });
};
