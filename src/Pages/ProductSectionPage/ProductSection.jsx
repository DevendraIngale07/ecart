import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Grid, Typography } from "@mui/material";
import { Link, useLocation} from "react-router-dom";

const ProductSection = () => {
  const usersdata = useSelector((state) => state.products);
  const location = useLocation();

  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const subCategoriesType = searchParams.get("subCategoriesType") || "DefaultType";

    setSelectedSubcategory(subCategoriesType);
  }, [location.search]);

  

  return (
    <Container maxWidth="lg" style={{ marginTop: "40px", color: "#fff" }}>
      {usersdata ? (
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          marginTop={"10px"}
        >
          {usersdata.map((data, index) => (
            
            <div
              key={index}
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
                    background: "#6e4b4b50",
                    zIndex: "1",
                  }}
                >
                  {data.subCategories &&
                    data.subCategories.map((e) => {
                      return (
                        <Typography
                          key={e.type}
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
                          
                        >
                          <Link
                            to={`/productpage?category=${data.category}&subCategoriesType=${e.type}`}
                            style={{
                              color:
                                selectedSubcategory === e.type
                                  ? "#fff"
                                  : "#fff",
                            }}
                          >
                            {e.type}
                          </Link>
                        </Typography>
                      );
                    })}
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
