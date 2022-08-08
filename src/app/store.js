import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/counter/carSlice/carSlice';

export const store = configureStore({
  reducer: {
    car:carReducer
  },
});
