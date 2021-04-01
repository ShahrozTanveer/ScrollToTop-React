import React from "react";
import "./styles.css";
import { ScrollTop } from "./ScrollTop";
function Nav() {
  return (
    <nav>
      <a href="#Home">Home</a>
      <a href="#About">About</a>
      <a href="#Social">Social</a>
    </nav>
  );
}
function Home() {
  return (
    <div className="section" style={{ backgroundColor: "#2470a0" }} id="Home">
      <h1>Home</h1>
    </div>
  );
}
function About() {
  return (
    <div className="section" style={{ backgroundColor: "#a696c8" }} id="About">
      <h1>About</h1>
    </div>
  );
}
function Social() {
  return (
    <div className="section" style={{ backgroundColor: "#060608" }} id="Social">
      <h1>Social</h1>
    </div>
  );
}
export default function App() {
  return (
    <>
      <ScrollTop />
      <Nav />
      <Home />
      <About />
      <Social />
    </>
  );
}
