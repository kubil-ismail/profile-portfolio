import React from "react";
import styled from "../style.module.css";
import { Grid, Typography as Text } from "@material-ui/core";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styled.footer}>
      <div className="bg-down"></div>
      <center>
        <img
          src="/img/logo-white.png"
          width="40px"
          height="40px"
          alt="logo"
          style={{ marginBottom: "20px" }}
        />
      </center>
      <Text
        variant="h1"
        color="secondary"
        align="center"
        style={{ marginBottom: "30px" }}
      >
        Let's make your <br /> dream app come true
      </Text>
      <Grid container spacing={3} justify="center">
        {[
          { link: "/", icon: <FaInstagram color="#4E4E4E" fontSize="20px" /> },
          { link: "/", icon: <FaGithub color="#4E4E4E" fontSize="20px" /> },
          { link: "/", icon: <FaLinkedinIn color="#4E4E4E" fontSize="20px" /> },
        ].map((val, key) => (
          <Grid item key={key}>
            <a href={val.link} className={styled.iconBox}>
              {val.icon}
            </a>
          </Grid>
        ))}
      </Grid>
      <Text color="secondary" align="center" style={{ marginTop: "50px" }}>
        2020 © Handcrafted by bilkis ismail
      </Text>
    </footer>
  );
}
