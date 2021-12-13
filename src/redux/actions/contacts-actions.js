import { createAction } from '@reduxjs/toolkit';

import ShortId from 'shortid';

const addContact = createAction('contacts/add', ({ name, number }) => {
  return {
    payload: {
      id: ShortId.generate(),
      name: name,
      number: number,
    },
  };
});
const deleteContact = createAction('contacts/delete');
const filterChange = createAction('contacts/changeFilter');

export { addContact, deleteContact, filterChange };
