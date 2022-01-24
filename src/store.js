import { configureStore } from './node-modules@reduxjs/toolkit';
import counterReducer from './features/sampleSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
