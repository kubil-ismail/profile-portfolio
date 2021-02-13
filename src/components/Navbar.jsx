import React from "react";
import styled from "../style.module.css";
import { AppBar, Button, Grid, Container, Toolbar } from "@material-ui/core";

export default function Navbar() {
  return (
    <AppBar position="static" color="trasnparent" className={styled.appBar}>
      <Toolbar>
        <Container>
          <Grid container justify="space-between" alignItems="center">
            <Grid item lg={1}>
              <img src="/img/logo.png" height="30px" width="30px" alt="logo" />
            </Grid>
            <Grid item lg={4}>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="flex-end"
              >
                <Grid item>
                  <Button>Portofolio</Button>
                </Grid>
                <Grid item>
                  <Button>Contact</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
