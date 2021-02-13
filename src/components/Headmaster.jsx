import React from "react";
import styled from "../style.module.css";
import { Grid, Typography as Text, Box } from "@material-ui/core";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Headmaster() {
  return (
    <div className={styled.headmaster}>
      <div>
        <Box marginY={10}>
          <Grid container justify="center" >
            <Grid item lg={2}>
              <div className={styled.profile}>
                <img
                  src="/img/profile.png"
                  alt="profile"
                  className={styled.profileImg}
                />
              </div>
            </Grid>
          </Grid>
          <Text variant="h1" align="center" gutterBottom>
            Fullstack Mobile Developer, UI/UX Designer
          </Text>
          <Text align="center" variant="h6" gutterBottom>
            I work beautiful code, and design great UI/UX
          </Text>
          <center>
            <AiOutlineArrowDown
              fontSize="25px"
              className="animate__animated animate__heartBeat animate__slow animate__infinite cursor-pointer"
            />
          </center>
        </Box>
      </div>
    </div>
  );
}
