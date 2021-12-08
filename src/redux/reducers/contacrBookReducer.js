import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterChange } from '../actions/contacts-actions';

const contacts = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) => state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [filterChange]: (_, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];
//     case DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
