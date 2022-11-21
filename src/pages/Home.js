import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="section">
     
        <Outlet />
      </section>
    </Fragment>
  );
};
export default Home;
