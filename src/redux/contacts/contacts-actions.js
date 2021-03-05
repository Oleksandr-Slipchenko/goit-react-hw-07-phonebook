import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

// const addContact = createAction('contacts/add', (newName, number) => ({
//   payload: {
//     id: uuid(),
//     name: newName,
//     number,
//   },
// }));

export const removeContactRequest = createAction(
  'contacts/removeContactRequest',
);
export const removeContactSuccess = createAction(
  'contacts/removeContactSuccess',
);
export const removeContactError = createAction('contacts/removeContactError');

// export const removeContact = createAction('contacts/remove');

export const changeFilter = createAction('contacts/changeFilter');
