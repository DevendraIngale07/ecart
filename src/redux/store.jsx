import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice';

const store = configureStore ({
  reducer: {
    users : ProductSlice,
  }

});

export default store