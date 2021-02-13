import React from "react";
import styled from "../style.module.css";
import { Grid, Typography as Text, Box } from "@material-ui/core";

export default function Collabortes() {
  return (
    <>
      <div className={styled.collaborates}>
        <Text
          variant="h1"
          align="center"
          gutterBottom
          style={{ marginBottom: "20px" }}
        >
          Proud to Collaborate with
        </Text>
        <Grid container spacing={2} justify="center" alignItems="center">
          {[
            "/img/collaborates/collaborates-2.png",
            "/img/collaborates/collaborates-1.png",
            "/img/collaborates/collaborates-3.png",
          ].map((val, key) => (
            <Grid item key={key}>
              <img src={val} alt="icon" />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
