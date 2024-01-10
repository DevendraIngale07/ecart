import { createSlice } from "@reduxjs/toolkit";
import all_product from "../Assets/all_product";

const ProductSlice = createSlice({
  name: "user",
  initialState: [...all_product],
  reducers: {
    showUser(state, action) {
      console.log(state);
    },
    
  },
});




export const { showUser} = ProductSlice.actions;
export default ProductSlice.reducer;


