import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section">
      <Link to="/" className="btn"> Navigate Home</Link>
      <h2> This is About
        page
      </h2>
    </section>
  );
};
export default About;
