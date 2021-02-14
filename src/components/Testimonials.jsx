import React from "react";
import styled from "../style.module.css";
import Slider from "react-slick";
import { Typography as Text } from "@material-ui/core";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Testimonials() {
  return (
    <div className={styled.testimonials}>
      <Text variant="h1" align="center" gutterBottom>
        Testimonials
      </Text>
      <Text align="center" gutterBottom style={{ marginBottom: "50px" }}>
        Lets look what people said that I’ve work with
      </Text>
      <Slider {...settings}>
        <div>
          <center>
            <img
              src="/img/testimonials/profile-1.png"
              alt="profile"
              className="image-circle"
              style={{ marginBottom: "15px" }}
            />
            <Text align="center">
              “Lorem ipsum dolor sit amet, consectetur elit. Sed nibh amet,{" "}
              <br />
              aliquam erat id. mis mese vivamus turpis condimentum mauris
              <br />
              elementum adipiscing. Interdum odio tristique sit accumsan, eget.”
            </Text>
            <Text variant="h3" gutterBottom style={{ marginTop: "20px" }}>
              Javier Rookley
            </Text>
            <Text>Head Product, Major.id</Text>
          </center>
        </div>
        <div>
          <center>
            <img
              src="/img/testimonials/profile-1.png"
              alt="profile"
              className="image-circle"
              style={{ marginBottom: "15px" }}
            />
            <Text align="center">
              “Lorem ipsum dolor sit amet, consectetur elit. Sed nibh amet,{" "}
              <br />
              aliquam erat id. mis mese vivamus turpis condimentum mauris
              <br />
              elementum adipiscing. Interdum odio tristique sit accumsan, eget.”
            </Text>
            <Text variant="h3" gutterBottom style={{ marginTop: "20px" }}>
              Javier Rookley
            </Text>
            <Text>Head Product, Major.id</Text>
          </center>
        </div>
      </Slider>
    </div>
  );
}
