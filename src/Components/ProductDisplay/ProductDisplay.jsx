import React, { useContext } from "react";
import "./ProductDisplay.css";
import { Link } from "react-router-dom";
import { Typography, Button, Grid } from "@mui/material";
import StarIcon from "../Assets/star_icon.png";
import StarDullIcon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <Grid container className="productdisplay">
      <Grid item xs={12} md={6} className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </Grid>

      <Grid item xs={12} md={6} className="productdisplay-right">
        <Typography variant="h5">{product.image}</Typography>
        <div className="productdisplay-right-stars">
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarDullIcon} alt="" />
          <Typography component="p">(122)</Typography>
        </div>
        <div className="productdisplay-right-price">
          <Typography variant="subtitle1" className="productdisplay-right-price-old">
            ${product.old_price}
          </Typography>
          <Typography variant="subtitle1" className="productdisplay-right-price-new">
            ${product.new_price}
          </Typography>
        </div>
        <Typography variant="body1" className="productdisplay-right-description">
          On one corner of my dresser sits a smiling toy clown on a tiny
          unicycle―a gift I received last Christmas from a close friend. The
          clown's short yellow hair, made of yarn, covers its ears but is parted
          above the eyes.
        </Typography>
        <div className="productdisplay-right-size">
          <Typography variant="h6">Select Size</Typography>
          <div className="productdisplay-right-size">
            <div className="prsd">S</div>
            <div className="prsd">M</div>
            <div className="prsd">L</div>
            <div className="prsd">XL</div>
            <div className="prsd">XXL</div>
          </div>
        </div>
        <Button variant="contained" onClick={() => { addToCart(product.id) }}>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>ADD TO CART</Link>
        </Button>
        <Typography variant="body2" className="productdisplay-right-category">
          <span>Category :</span> Women, T-Shirt, Crop Top
        </Typography>
        <Typography variant="body2" className="productdisplay-right-category">
          <span>Tag :</span> Modern, Latest
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductDisplay;
