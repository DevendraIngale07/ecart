import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleProductPage = () => {
  const { productId, subCategoriesType } = useParams();

  const showdata = useSelector((state) => state.products);

  const selectedProduct = showdata
    .flatMap((data) => data.subCategories || [])
    .filter((subCat) => subCat && subCat.type === subCategoriesType)
    .flatMap((subCat) => subCat.products || [])
    .find((product) => product.id === parseInt(productId));

  if (!selectedProduct) {
    return (
      <Container maxWidth="lg" style={{ marginTop: "40px", color: "#fff" }}>
        <Typography
          variant="h3"
          align="center"
          style={{ color: "#E32D2D", marginTop: "30px" }}
        >
          Product not found
        </Typography>
      </Container>
    );
  }

  const productType = selectedProduct.type || "";

  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: "40px", color: "#fff", cursor: "pointer" }}
    >
      {selectedProduct ? (
        <>
          <Typography
            variant="h3"
            align="center"
            style={{
              marginBottom: "30px",
              color: "#E32D2D",
              marginTop: "30px",
            }}
          >
            Product Details
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                variant="h5"
                align="center"
                style={{ marginBottom: "20px", marginRight: "20px" }}
              >
                {selectedProduct.name} - {productType}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                style={{ fontSize: "20px" }}
              >
                <strong>Category:</strong> {selectedProduct.category}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                style={{ fontSize: "20px" }}
              >
                <strong>New Price:</strong> $
                {selectedProduct.new_price.toFixed(2)}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                style={{
                  fontSize: "20px",
                  textDecoration: "line-through",
                  textDecorationColor: "#FF0000",
                  color: "#fff",
                }}
              >
                <strong>Old Price:</strong> $
                {selectedProduct.old_price.toFixed(2)}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                style={{ fontSize: "20px" }}
              >
                <strong>Description:</strong>
                <strong style={{ padding: "10px" }}>
                  On one corner of my dresser sits a smiling toy clown on a tiny
                  unicycle―a gift I received last Christmas from a close friend.
                </strong>
              </Typography>
              <br />
              <Typography
                variant="body1"
                paragraph
                style={{ fontSize: "20px" }}
              >
                <strong>Select Size:</strong>{" "}
                <strong
                  style={{
                    padding: "10px",
                    border: "1px solid ",
                    marginLeft: "8px",
                    cursor: "pointer",
                  }}
                >
                  S{" "}
                </strong>
                <strong
                  style={{
                    padding: "10px",
                    border: "1px solid",
                    marginLeft: "8px",
                    cursor: "pointer",
                  }}
                >
                  M{" "}
                </strong>
                <strong
                  style={{
                    padding: "10px",
                    border: "1px solid",
                    marginLeft: "8px",
                    cursor: "pointer",
                  }}
                >
                  L{" "}
                </strong>
                <strong
                  style={{
                    padding: "10px",
                    border: "1px solid",
                    marginLeft: "8px",
                    cursor: "pointer",
                  }}
                >
                  XL{" "}
                </strong>
                <strong
                  style={{
                    padding: "10px",
                    border: "1px solid",
                    marginLeft: "8px",
                    cursor: "pointer",
                  }}
                >
                  XXL
                </strong>
              </Typography>
              <br />
              <Link to={`/cartitems`}>
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </Link>
            </Grid>
          </Grid>
        </>
      ) : (
        <Typography variant="h6" align="center">
          Product not found.
        </Typography>
      )}
    </Container>
  );
};

export default SingleProductPage;
