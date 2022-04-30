import React from "react";
import { Link } from "react-router-dom";
import JumbotronImage from "../assets/jumbotron.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${JumbotronImage})` }}>
      <div className="jumbotron">
        <h1>Fried Rice Restaurant</h1>
        <p>React Restaurant Website Portfolio</p>
        <Link to="menu">
          <button>See Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
