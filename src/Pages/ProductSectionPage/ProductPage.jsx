import React from "react";
// import { Container, Typography, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

const ProductPage = ({
  selectedCategory,
  selectedSubcategory,
  selectedProducts,
}) => {
  const location = useLocation();
  const AA = location.state && location.state;
  console.log(AA);
  return (
    <>
    HIIIII</>
  );
};

export default ProductPage;
