import React from 'react';
import './Socials.css';
import github from '../../../images/GitHub-Mark-120px-plus.png';
import linkedin from '../../../images/LI-In-Bug.png';
import gmail from '../../../images/gmail.png';


function Socials() {
  return (
    <div>
        
        <img alt='Link to Github' className='social-image' src={github}></img>
        <a href='https://www.linkedin.com/in/vetle-harnes-aa1b2a170/'><img alt='Link to LinkedIn' className='social-image' src={linkedin}></img></a>
        <img alt='Send me an email!' className='social-image' src={gmail}></img>
    </div>
  );
}

export default Socials;