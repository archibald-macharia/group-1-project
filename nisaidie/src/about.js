import React from 'react';

function About(){
    
    return(
        <div>
            <h1>Meet the developers behind NISAIDIE</h1>
            <h3>Who Are We?</h3>
            <p>Nisaidie is brought to you by a group of aspiring software developers witha desire to offer help to those who need it but don't know where to start.</p>
            <div className='about-cards'>
            <div className='individual-card'>
                <img src='https://st3.depositphotos.com/17828278/33150/v/450/depositphotos_331503262-stock-illustration-no-image-vector-symbol-missing.jpg'
                className='about-img'
                alt='Developer 1'></img>
                <h3>Abigail Otieno</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <div className='individual-card'>
                <img src='https://st3.depositphotos.com/17828278/33150/v/450/depositphotos_331503262-stock-illustration-no-image-vector-symbol-missing.jpg'
                className='about-img'
                alt='Developer 2'></img>
                <h3>Archibal Gacheru</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <div className='individual-card'>
                <img src='https://st3.depositphotos.com/17828278/33150/v/450/depositphotos_331503262-stock-illustration-no-image-vector-symbol-missing.jpg'
                className='about-img'
                alt='Developer 3'></img>
                <h3>Peris Kingori</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <div className='individual-card'>
                <img src='https://st3.depositphotos.com/17828278/33150/v/450/depositphotos_331503262-stock-illustration-no-image-vector-symbol-missing.jpg'
                className='about-img'
                alt='Developer 4'></img>
                <h3>Newton Bundi</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            </div>
        </div>
    );
}

export default About;