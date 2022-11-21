import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <h3> this is Home Page</h3>
      <Outlet/>
    </section>
  );
};
export default Home;
