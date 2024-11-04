import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from '../features/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: composeWithDevTools(),
});

export default store;
