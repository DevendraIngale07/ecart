import React from "react";
import all_product from "../../Assets/all_product";
// import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const ProductSection = () => {

  // const dispatch = useDispatch();

  // const data = useSelector((state) =>{
  //   console.log(state);
  // } )

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "40px", color: "#000000" }}>
        <Typography variant="h6" align="center" >
          SHOPPING PRODUCTS
        </Typography>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {all_product.map((result, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="390"
                    image={result.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
                    <Typography variant="body2" color="text.secondary">
                      Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse"
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProductSection;


