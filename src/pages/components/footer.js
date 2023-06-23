import React from 'react'
import './footer.css'
import { Link } from 'gatsby'

const Footer = () => {
    return(
        <div class="footer">
            <ul class="footer-ul">
                <li class="footer-li">
                    <Link to='/' class="footer-a">
                        HOME
                    </Link>
                </li>
                <li class="footer-li">
                    <Link to='/stories' class="footer-a">
                        STORIES
                    </Link>
                </li>
                <li class="footer-li">
                    <Link to='/about' class="footer-a">
                        ABOUT
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer 