import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/sampleSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
