import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    // Define the scrollHandler function
    const scrollHandler = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []); // Empty dependency array ensures this runs only once on mount and unmount

    return (
        <div className={`nav ${show && "nav__black"}`}> 
            <img
                onClick={() => navigate('/')}
                className='nav__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                alt='Netflix Logo'
            />

            <img
                onClick={() => navigate('/profile')}
                className='nav__avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt='Netflix Avatar'
            />
        </div>
    );
}

export default Nav;
