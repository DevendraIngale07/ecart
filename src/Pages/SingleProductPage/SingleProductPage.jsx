import React from "react";
import { Container, Typography,  } from "@mui/material";
import { useLocation, } from "react-router-dom";
import { useSelector } from "react-redux";
// import all_product from "../../redux/all_product";

const SingleProductPage = () => {
  // const location = useLocation();
  // const navigate = useNavigate(); 

  const showdata = useSelector((state) => state.products);
  console.log(showdata);

  
  const data = showdata.map((data) => data.subCategories)
  
  console.log(data);



  

  return (
    <Container maxWidth="lg" style={{ marginTop: "40px", color: "#fff", cursor: "pointer" }}>
      <Typography
        variant="h3"
        align="center"
        style={{ marginBottom: "30px", color: "#E32D2D", marginTop: "30px" }}
      >
        Selected Product
      </Typography>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={product.image} alt={product.name} style={{ maxWidth: "100%", height: "auto" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="body1">{`New Price: $${product.new_price}`}</Typography>
          <Typography variant="body1">{`Old Price: $${product.old_price}`}</Typography>
         
        </Grid>
      </Grid> */}
    </Container>
  );
};

export default SingleProductPage;
