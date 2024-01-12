import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";
import Navbar from "./Pages/Navbar/Navbar";
import HeroSection from "./Pages/HomePage/HeroSection";
import ProductSection from "./Pages/ProductSectionPage/ProductSection";
import LoginSignup from "./Pages/LoginSingUp/LoginSingup";
import ProductPage from "./Pages/ProductSectionPage/ProductPage";

const theme = createTheme({
  palette: {},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route exact  path="/" element={<HomePage />} />
            <Route exact  path="/single-product" element={<SingleProductPage />} />
            <Route exact  path="/herosection" element={<HeroSection />} />
            <Route exact  path="/productsection" element={<ProductSection/>} />
            <Route exact  path="/productpage" component={ProductPage} />
            <Route exact  path="/Login" element={<LoginSignup/>}/>
          </Routes>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

