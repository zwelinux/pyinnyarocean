import * as React from 'react'
import './navbar.css'
import { Link } from 'gatsby'

const Navbar = () => {
    return(
        <div class="nav">
            <ul>
                <li class="title">
                    PyinNyarOcean
                </li>
                <li class="link">
                    <Link to='/about'>
                        ABOUT
                    </Link>
                </li>
                <li class="link">
                    <Link to='/stories'>
                        STORIES
                    </Link>
                </li>
                <li class="link">
                    <Link to='/'>
                        HOME
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar