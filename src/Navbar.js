import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <ul>
            <li><Link to="/">Landing</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/bruce">Bruce</Link></li>
      </ul>

    );

}

export default Navbar;