import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import { IconButton, Box, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="image-container">
        <img
          src={activeImage.img}
          alt={activeImage.title}
          className="carousel-image"
        />
        <div className="carousel-background">
          <div className="caption-container">
            <Box
              bgcolor="rgba(255, 255, 255, 0.7)"
              borderRadius="10px"
              p={2}
              className="caption-box"
            >
              <Typography variant="h4" component="h2" gutterBottom>
                {activeImage.title}
              </Typography>
            </Box>
            <Box
              bgcolor="rgba(255, 255, 255, 0.7)"
              borderRadius="10px"
              p={2}
              className="caption-box"
            >
              <Typography variant="subtitle1" component="p">
                {activeImage.subtitle}
              </Typography>
            </Box>
          </div>
          <div className="carousel-controls">
            <IconButton
              onClick={handlePrevious}
              className="carousel-control"
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              className="carousel-control"
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
