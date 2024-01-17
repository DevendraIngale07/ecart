import { Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const SingleProductPage = () => {
  const location = useLocation(); 
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const subCategoriesType = searchParams.get("subCategoriesType");

  const showdata = useSelector((state) => state.products);

  const data = showdata
    .filter((data) => category === data.category)
    .map((data) => data.subCategories)
    .flat();

  const abc = data
    .filter((subCat) => subCat.type === subCategoriesType)
    .map((subCat) => subCat.products)
    .flat();
    console.log(abc);

  
 
  

  return (
    <>
    <Container
      maxWidth="lg"
      style={{ marginTop: "40px", color: "#fff", cursor: "pointer" }}
    >
      <Typography
        variant="h3"
        align="center"
        style={{ marginBottom: "30px", color: "#E32D2D", marginTop: "30px" }}
      >
        Selected Product
      </Typography>
      <Grid container spacing={2}>
        
         
       
      </Grid>

    </Container>

    </>
  )
}

export default SingleProductPage