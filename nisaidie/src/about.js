import React from 'react';
import './About.css'
import Archie from './images/superman dog.jpeg'
import Abigail from './images/supercat.jpg'
import Peris from './images/batcat.jpeg'
import Newton from './images/superlion.jpg'

function About(){
    
    return(
        <div id='about'>
            <h1 id='devs-h1'>Meet the developers behind NISAIDIE</h1>
            <h3 id='devs-h3'>Who Are We?</h3>
            <p id='p-desc'>Nisaidie is brought to you by a group of aspiring software developers with a desire to offer help to those who need it but don't know where to start.</p>
            <div className='about-cards'>
            <div className='individual-card'>
                <img src={Abigail}
                className='about-img'
                alt='Developer 1'></img>
                <h3>Abigail Otieno</h3>
                <p className='indi'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <div className='individual-card'>
                <img  src={Archie}
                className='about-img'
                alt='Developer 2'></img>
                <h3>Archibald Gacheru</h3>
                <p className='indi'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <div className='individual-card'>
                <img src={Peris}
                className='about-img'
                alt='Developer 3'></img>
                <h3>Peris Kingori</h3>
                <p className='indi'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <div className='individual-card'>
                <img src={Newton}
                className='about-img'
                alt='Developer 4'></img>
                <h3>Newton Bundi</h3>
                <p className='indi'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            </div>
        </div>
    );
}

export default About;