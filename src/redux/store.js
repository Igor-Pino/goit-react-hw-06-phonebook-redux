import { configureStore } from '@reduxjs/toolkit';
import contactBookReducer from './reducers/contacrBookReducer';
import logger from 'redux-logger';

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: {
    contactBook: contactBookReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),

  devTools: process.env.NODE_ENV === 'development',
});

export default store;
