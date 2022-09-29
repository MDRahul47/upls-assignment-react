import React from 'react';
import './Navbar.css';
import { BiFootball } from 'react-icons/bi';


const Navbar = () => {
    return (
        <div>
            <div className='head'>  
               <h1> <BiFootball></BiFootball>  Bangladesh Football Team  <BiFootball></BiFootball></h1>
               <h2>Make  your Team </h2>
            </div>
        </div>
    );
};

export default Navbar;