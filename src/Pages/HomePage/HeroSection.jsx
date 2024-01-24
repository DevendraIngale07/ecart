import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Paper, IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const HeroSection = () => {
  const image = [
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/099275c4a9373da4.jpg?q=20",
    "https://vmaxo.com/includes/uploads/menu_image/f54603a3524ae1a468133a6f57cf49ee.jpg",
    "https://img.freepik.com/free-vector/flat-furniture-sale-banner-with-photo_23-2148926442.jpg?size=626&ext=jpg&ga=GA1.1.211083069.1704977160&semt=ais",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f51d4324b73f58d7.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ee4cfe398734c78d.jpg?q=20",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const CustomNextArrow = ({ onClick }) => (
    <IconButton
      style={{
        position: "absolute",
        top: "50%",
        right: 10,
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <NavigateNextIcon style={{ fontSize: 40, color: "white" }} />
    </IconButton>
  );

  return (
    <div>
      <Slider
        {...settings}
        style={{ marginTop: "40px" }}
        nextArrow={<CustomNextArrow />}
      >
        {image.map((imageUrl, index) => (
          <Paper key={index} style={{ position: "relative" }}>
            <img
              src={imageUrl}
              alt={`carousel-item-${index + 1}`}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </Paper>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
