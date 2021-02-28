import React from "react";
import { Typography as Text } from "@material-ui/core";
import styled from "../style.module.css";

export default function Story() {
  return (
    <>
      <div id="detail" />
      <div className={styled.story}>
        <div>
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
            Hello, I’m Haikal Nurkalam, I am an UI / UX Designer and Front end{" "}
            <br />
            developer. I am a graduate of Information technology, I often
            <br />
            collaborate with people who have talent in this field, and I also
            <br />
            have a large portfolio that you can see in this web. I am friendly,
            <br />
            curious, passionate, and disciplined
          </Text>
        </div>
      </div>
    </>
  );
}
