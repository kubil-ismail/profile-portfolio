import React from "react";
import { Typography as Text, Grid, Container, } from "@material-ui/core";
import styled from "../style.module.css";

export default function Service() {
  return (
    <div className={styled.service}>
      <Container>
        <Text variant="h1" align="center" gutterBottom>
          My Amazing Services
        </Text>
        <Text align="center" gutterBottom style={{ marginBottom: "100px" }}>
          You will be amazed after seeing the best service from me
        </Text>
        {[
          {
            title: "Fullstack Mobile Developer",
            body: (
              <Text gutterBottom style={{ marginBottom: "15px" }} align="left">
                I make web applications accordingly your needs, starting from
                the landing page, <br />
                company profile, online shop, web tools companies, as well as
                web finance
              </Text>
            ),
            skills: (
              <Text className="text-italic" align="left">
                PHP, Javascript, NodeJS, MySQL, Laravel, <br /> ReactJS, Vue,
                Bootstrap, Codeigniter
              </Text>
            ),
            image: (
              <img
                src="/img/services-1.png"
                className={styled.serviceImage}
                alt="services"
              />
            ),
            direction: "row",
            textAlign: "left",
          },
          {
            title: "UI/UX Design",
            body: (
              <Text gutterBottom style={{ marginBottom: "15px" }} align="right">
                I make a good application design web or mobile, make
                illustrations good, <br /> prototyping for app testing, as well
                as an incredible mockup
              </Text>
            ),
            skills: (
              <Text className="text-italic" align="right">
                Skills Figma, Adobe XD , Sketch, ProtoPie Zeplin, <br /> Framer,
                InvisionApp
              </Text>
            ),
            image: (
              <img
                src="/img/services-2.png"
                className={styled.serviceImage}
                alt="services"
              />
            ),
            direction: "row-reverse",
            textAlign: "right",
          },
        ].map((val, key) => (
          <CardBox
            key={key}
            title={val.title}
            body={val.body}
            skills={val.skills}
            image={val.image}
            direction={val.direction}
            textAlign={val.textAlign}
          />
        ))}
      </Container>
    </div>
  );
}

const CardBox = ({ title, body, skills, image, direction, textAlign }) => (
  <Grid
    container
    alignItems="center"
    direction={direction}
    justify="center"
    spacing={5}
    style={{ marginBottom: "50px" }}
  >
    <Grid item lg={6}>
      <Text variant="h2" align={textAlign} gutterBottom>
        {title}
      </Text>
      {body}
      <Text variant="h3" align={textAlign} gutterBottom>
        Skills
      </Text>
      {skills}
    </Grid>
    <Grid item lg={6}>
      {image}
    </Grid>
  </Grid>
);
