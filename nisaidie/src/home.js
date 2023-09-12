import React from 'react'
import './index.css'

function Home(){
    return(
        <div className='header'>
            <div id='logo'>
                <h2><span id='n'>N</span><span id='s'>s.</span></h2> 
            </div>
            <div className='Navbar'>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#counselor'>Counselor</a></li>
                    <li><a href='#inspiration'>Stories</a></li>
                    <li><a href='#about'>About Us</a></li>
                    <li><a href='#Contact'>Contact</a></li>
                    <li><a href='#sign-up'>Sign Up</a></li>

                </ul>
            </div>
        </div>
    );
}

export default Home;