export const bannerData = [
  "/pixel.jpg",
  "/redmi.jpg",
  "/samsung.jpg",
  "/iphone12.jpg",
  "/iphone.png",
  "/oppo.jpg"

  //   "https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50",
  //   "https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50",
  //   "https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50",
];
import React from "react";
import Carousel from "react-material-ui-carousel";

export const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          background: "#fff",
          color: "#404040",
          borderRadius: 5,
          margin: 1,
        },
      }}
      //   sx={{ marginTop: 20 }}
    >
      {bannerData.map((item) => (
        <img
          key={item}
          src={item}
          alt=""
          style={{ width: "100%", height: "700px" }}
        />
      ))}
    </Carousel>
  );
};
