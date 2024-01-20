import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ProductSection from "./ProductSection";

const ProductPage = () => {
  const location = useLocation(); 
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const subCategoriesType = searchParams.get("subCategoriesType") || "DefaultType";


  const showdata = useSelector((state) => state.products);

  const data = showdata
    .filter((data) => category === data.category)
    .map((data) => data.subCategories)
    .flat();

  const abc = data
    .filter((subCat) => subCat.type === subCategoriesType)
    .map((subCat) => subCat.products)
    .flat();


  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: "40px", color: "#fff", cursor: "pointer" }}
    >
      <ProductSection />
      <Typography
        variant="h3"
        align="center"
        style={{ marginBottom: "30px", color: "#E32D2D", marginTop: "30px" }}
      >
        Products for {subCategoriesType}
      </Typography>
      <Grid container spacing={2}>
  {abc.map((product) => (
    <Grid item xs={12} sm={6} md={3} lg={4} key={product.id}>
      {subCategoriesType && (
        <Link  to={`/single-product/${subCategoriesType}/${product.id}`}>
          
          
            <img
              src={product.image}
              alt={product.name}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Typography variant="h6" style={{ color:"#fff", textDecoration: "none"}}>{product.name}</Typography>
            <Typography variant="body1" style={{ color:"#fff"}}>{`Price: $${product.new_price}`}</Typography>
            <Typography variant="body1" style={{ color:"#fff"}}>{`Old Price: $${product.old_price}`}</Typography>
          
        </Link>
      )}
    </Grid>
  ))}
</Grid>
    </Container>
  );
};

export default ProductPage;
