import axios from 'axios';
import * as actions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error));
  }

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
  //   .catch(error => dispatch(actions.fetchContactError(error)));
};

export const addContact = (name, number) => async dispatch => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }

  // axios
  //   .post('/contacts', contact)
  //   .then(({ data }) => dispatch(actions.addContactSuccess(data)))
  //   .catch(error => dispatch(actions.addContactError(error)));
};

export const removeContact = contactId => async dispatch => {
  dispatch(actions.removeContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(actions.removeContactSuccess(contactId));
  } catch (error) {
    dispatch(actions.removeContactError(error));
  }

  // axios
  //   .delete(`/contacts/${contactId}`)
  //   .then(() => dispatch(actions.removeContactSuccess(contactId)))
  //   .catch(error => dispatch(actions.removeContactError(error)));
};
