import React from "react";
import { Typography as Text } from "@material-ui/core";
import styled from "../style.module.css";

export default function Story() {
  return (
    <div className={styled.story}>
      <Text
        align="center"
        variant="h1"
        color="secondary"
        gutterBottom
        style={{ marginBottom: "30px" }}
      >
        This is story about me
      </Text>
      <Text align="center" color="secondary">
        Hello, I’m Bilkis Ismail, I am Fullstack Mobile Developer and UI/UX
        Designer. I am a graduate of Information technology,
        <br /> I often collaborate with people who have talent in this field,
        and I also have a large portfolio that you can see in this web.
        <br /> I am friendly, curious, passionate, and disciplined
      </Text>
    </div>
  );
}
