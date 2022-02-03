import React from 'react';
import placeholder from '../../images/male-placeholder-image.jpeg';
import './Greeting.css';
import More from './more/More';
import Socials from './socials/Socials'

function Greeting() {
  return (
    <div className='wrapper'>
      <div className="greeting">
        <div>
          <div className="links">
            <h1>Vetle Harnes</h1>
            <ul>
              <li>Om meg</li>
              <li>Studier</li>
              <li>Erfaringer</li>
              <li>Prosjekter</li>
            </ul>
          </div>
        </div>
        <div><img className='profile-pic' src={placeholder}></img></div>
        
      </div>
      <Socials></Socials>
      <More></More>
    </div>
  );
}

export default Greeting;
