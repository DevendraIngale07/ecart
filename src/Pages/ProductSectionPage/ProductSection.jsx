import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const usersdata = useSelector((state) => state.products);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [ setSelectedProducts] = useState([]);
// selectedProducts,
  const handleSubcategoryClick = (subcategory) => {
    const selectedData = usersdata.find((data) =>
      data.subCategories.find((e) => e.type === subcategory)
    );

    setSelectedSubcategory(subcategory);
    setSelectedProducts(selectedData?.subCategories.find((e) => e.type === subcategory)?.products || []);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "40px", color: "#fff" }}>
      <Grid container spacing={3} justifyContent="space-between" marginTop={"10px"}>
        {usersdata.map((data) => (
          <div
            key={data.category}
            onMouseEnter={() => setHoveredCategory(data.category)}
            onMouseLeave={() => setHoveredCategory(null)}
            style={{ position: "relative", display: "inline-block" }}
          >
            <Typography variant="h4" align="center">
              {data.category}
            </Typography>
            {hoveredCategory === data.category && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  alignItems: "center",
                  justifyContent: "space-around",
                  transform: "translateX(-50%)",
                  gap: "15px",
                  backgroundColor: "#fff",
                  padding: "50px",
                  boxShadow: "8px 12px 16px rgba(0, 55,  58, 0.3)",
                  borderRadius: "13px",
                  background: "#775959",
                  zIndex:"1",
                }}
              >
                {data.subCategories &&
                  data.subCategories.map((e) => (
                    <Typography
                      key={e.type}
                      variant="subtitle1"
                      align="center"
                      style={{
                        cursor: "pointer",
                        justifyContent: "space-between",
                        gap: "10px",
                        color: selectedSubcategory === e.type ? "#fff" : "#000",
                      }}
                      onClick={() => handleSubcategoryClick(e.type)}
                    >
                      <Link to={{ pathname: "/productpage", state: { nationality: "Icelandic" } }}>
                        {e.type}
                      </Link>
                    </Typography>
                  ))}
              </div>
            )}
          </div>
        ))}
      </Grid>

      {/* {selectedSubcategory && (
        <Container maxWidth="lg" style={{ marginTop: "40px", color: "#000000" }}>
          <Typography variant="h4" align="center">
            Products for {selectedSubcategory}
          </Typography>
          <Grid container spacing={3}>
            {selectedProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <div style={{ textAlign: "center" }}>
                  <img src={product.image} alt={product.name} style={{ maxWidth: "100%" }} />
                  <Typography variant="h6" style={{ margin: "10px 0" }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="primary">
                    New Price: ${product.new_price}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Old Price: ${product.old_price}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      )} */}
    </Container>
  );
};

export default ProductSection;
