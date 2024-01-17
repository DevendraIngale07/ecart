import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const ProductSection = () => {
  const usersdata = useSelector((state) => state.products);
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleSubcategoryClick = (category, subCategoriesType) => {
    setSelectedSubcategory(subCategoriesType);
    navigate(
      `/productpage?category=${category}&subCategoriesType=${subCategoriesType}`
    );
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "40px", color: "#fff" }}>
      {usersdata ? (
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          marginTop={"10px"}
        >
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
                    zIndex: "1",
                  }}
                >
                  {data.subCategories &&
                    data.subCategories.map((e) => (
                      <Typography
                        key={e}
                        variant="subtitle1"
                        align="center"
                        style={{
                          cursor: "pointer",
                          justifyContent: "space-between",
                          gap: "10px",
                          fontSize: "20px",
                          fontWeight: 600,
                          fontFamily: "Arial, sans-serif",
                        }}
                        onClick={() =>
                          handleSubcategoryClick(data.category, e.type)
                        }
                      >
                        <Link
                          to="/productpage"
                          style={{
                            color:
                              selectedSubcategory === e.type ? "#fff" : "#000",
                          }}
                        >
                          {e.type}
                        </Link>
                      </Typography>
                    ))}
                </div>
              )}
            </div>
          ))}
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default ProductSection;
