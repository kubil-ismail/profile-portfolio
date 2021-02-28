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
            title: "UI/UX Design",
            body: (
              <Text gutterBottom style={{ marginBottom: "15px" }} align="left">
                I make a good application design web or mobile, make <br />
                illustrations good, prototyping for app testing, as well as an{" "}
                <br />
                incredible mockup
              </Text>
            ),
            skills: (
              <Text className="text-italic" align="left">
                Figma, Adobe XD, Zeplin, Sketch, ProtoPie Framer, <br />
                InvisionApp
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
            title: "Web Application",
            body: (
              <Text gutterBottom style={{ marginBottom: "15px" }} align="right">
                I make web applications accordingly your needs, starting from
                <br />
                the landing page, company profile, online shop, web tools <br />
                companies, as well as web finance
              </Text>
            ),
            skills: (
              <Text className="text-italic" align="right">
                PHP, Javascript, NodeJS, MySQL, Laravel ReactJS, Vue, <br />
                Bootstrap, Codeigniter
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
