import React from "react";
import styled from "../style.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Headmaster() {
  return (
    <div className="headmaster grid">
      <div className="justify-self-center">
        <div className={styled.profileImg}>
          <img
            src="/img/profile.png"
            alt="profile"
            style={{ marginTop: "-40px" }}
          />
        </div>
      </div>
      <h1 className="text-center mt-5 text-4xl">
        Fullstack Mobile Developer, UI/UX Designer
      </h1>
      <p className="text-center font-light text-lg">
        I work beautiful code, and design great UI/UX
      </p>
      <div className="justify-self-center mt-5 animate-bounce cursor-pointer">
        <AiOutlineArrowDown fontSize="22px" />
      </div>
    </div>
  );
}
