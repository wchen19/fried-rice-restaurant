import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/scenery.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='jumbotron'>
        <h1>Wilbert's Restaurant</h1>
        <p>React Restaurant Website Portfolio</p>
        <Link to='menu'>
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  )
}

export default Home