import React from "react";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Client from "./Client";
import Contact from "./Contact";

export default function Homepage() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Client></Client>
      <Contact></Contact>
    </div>
  );
}
