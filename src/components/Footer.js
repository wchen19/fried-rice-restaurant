import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='contactInfo'>
          <a href='https://www.instagram.com/wbertchen/' target='_blank' rel='noreferrer'><InstagramIcon /></a>
          <a href='https://github.com/wchen19' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
          <a href='https://www.linkedin.com/in/wilbert-chen-ab456320a/' target='_blank' rel='noreferrer'><GitHubIcon /></a>
        </div>
        <p>&copy; 2022 Fried Rice Restaurant</p>
    </div>
  )
}

export default Footer