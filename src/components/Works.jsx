import React from "react";
import styled from "../style.module.css";
import {
  Grid,
  Typography as Text,
  Container,
  Box,
  Button,
} from "@material-ui/core";

export default function Works() {
  return (
    <div className={styled.works}>
      <Container>
        <Text variant="h1" align="center" gutterBottom>
          My Recent Works
        </Text>
        <Text align="center" style={{ marginBottom: "50px" }}>
          Lets look what people said that I’ve work with
        </Text>
        <Grid container spacing={5}>
          {[
            {
              img: "/img/works/works-1.png",
              title: "Co-Work",
              type: "UI/UX Design",
              date: "27-11-2020",
              source: "Figma",
            },
            {
              img: "/img/works/works-2.png",
              title: "Smart Home",
              type: "UI/UX Design",
              date: "27-11-2020",
              source: "Figma",
            },
            {
              img: "/img/works/works-3.png",
              title: "Setup Desk",
              type: "3D Illustration",
              date: "27-11-2020",
              source: "Blender",
            },
            {
              img: "/img/works/works-4.png",
              title: "House Rent",
              type: "UI/UX Design",
              date: "27-11-2020",
              source: "Figma",
            },
            {
              img: "/img/works/works-5.png",
              title: "Karo Coffee",
              type: "UI/UX Design",
              date: "27-11-2020",
              source: "Figma",
            },
            {
              img: "/img/works/works-6.png",
              title: "Stock Video",
              type: "UI/UX Design",
              date: "27-11-2020",
              source: "Figma",
            },
          ].map((val, key) => (
            <Grid items lg={4} key={key}>
              <Box padding={1} marginBottom={1}>
                <img
                  src={val.img}
                  width="100%"
                  alt="services"
                  className="img-border"
                />
                <Grid container alignItems="center" justify="space-between">
                  <Grid item lg={6}>
                    <Text variant="h5">{val.title}</Text>
                  </Grid>
                  <Grid item lg={6}>
                    <Text align="right">{val.date}</Text>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" justify="space-between">
                  <Grid item lg={6}>
                    <Text align="left">Type : {val.type}</Text>
                  </Grid>
                  <Grid item lg={6}>
                    <Text align="right">{val.source}</Text>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box marginBottom={10} />
      <center>
        <Button variant="outlined">See more on Dribbble</Button>
      </center>
    </div>
  );
}
