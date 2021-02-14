import React from "react";
import styled from "../style.module.css";
import { Typography as Text, Button, Divider, Container } from "@material-ui/core";

export default function Cta() {
  return (
    <div className={styled.cta}>
      <Container>
        <Divider />
        <Text
          variant="h1"
          align="center"
          gutterBottom
          style={{ marginTop: "100px" }}
        >
          Interested to work with me ?
        </Text>
        <Text align="center" style={{ marginBottom: "30px" }}>
          I’m open the opportunity to work with me together, just click below
        </Text>
        <center>
          <Button variant="contained">Lets Discuss</Button>
        </center>
      </Container>
    </div>
  );
}
