import React from "react";
import styled from "../style.module.css";
import { Grid, Typography as Text, Box } from "@material-ui/core";

export default function Testimonials() {
  return (
    <div className={styled.testimonials}>
      <Text variant="h1" align="center" gutterBottom>
        Testimonials
      </Text>
      <Text align="center" gutterBottom>
        Lets look what people said that I’ve work with
      </Text>
    </div>
  );
}
