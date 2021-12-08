import { ADD, DELETE, CHANGE_FILTER } from '../actions-types';
import ShortId from 'shortid';

const addContact = ({ name, number }) => ({
  type: ADD,
  payload: {
    id: ShortId.generate(),
    name: name,
    number: number,
  },
});

const deleteContact = contactId => ({
  type: DELETE,
  payload: contactId,
});

const filterChange = value => ({
  type: CHANGE_FILTER,
  payload: value,
});

export { addContact, deleteContact, filterChange };
