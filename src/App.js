import React from "react";
import Navbar from "./components/Navbar";
import Headmaster from "./components/Headmaster";
import Story from "./components/Story";
import Service from "./components/Service";
import Works from "./components/Works";
import Collaborates from "./components/Collabortes";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Headmaster />
      <Story />
      <Service />
      <Works />
      <Collaborates />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
