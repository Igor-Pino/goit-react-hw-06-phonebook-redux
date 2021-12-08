import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import contactBookReducer from './reducers/contacrBookReducer';

const rootReducer = combineReducers({
  contactBook: contactBookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
