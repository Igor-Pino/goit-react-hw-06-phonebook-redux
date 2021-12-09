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

// vanilla redux екшени і типи екшкнів.

// const ADD = 'contacts/add';
// const DELETE = 'contacts/delete';
// const CHANGE_FILTER = 'contacts/changeFilter';

// const addContact = ({ name, number }) => ({
//   type: ADD,
//   payload: {
//     id: ShortId.generate(),
//     name: name,
//     number: number,
//   },
// });

// const deleteContact = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });

// const filterChange = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
// комент
