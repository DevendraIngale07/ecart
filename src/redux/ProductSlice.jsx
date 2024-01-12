import { createSlice } from "@reduxjs/toolkit";
import all_product from "./all_product";

const ProductSlice = createSlice({
  name: "products",
  initialState: [...all_product],
  reducers: {
    // showUser(state, action) {
    //   console.log(state);
    // },
    
  },
});




// export const { showUser} = ProductSlice.actions;
export default ProductSlice.reducer;


