import React from "react"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <section className='section'>
      <Link to ="/about" className="btn"> Navigate to About</Link>
      <h3>  this is Home Page</h3>
    </section>
  );
};
export default Home;