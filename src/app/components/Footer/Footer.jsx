import React from 'react'
import './footer.css';
import { CgChevronDoubleUpO } from "react-icons/cg";

function Footer() {


    return (
        <footer className='footer'>
            <div className="footer-text">
                <p>Nathaly. | Mi Portfolio ♥</p>
            </div>
            <div className="footer-iconTop">
                <a href="#"><CgChevronDoubleUpO /></a>
            </div>
        </footer>
    )
};

export default Footer;