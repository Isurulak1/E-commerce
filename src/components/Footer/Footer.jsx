import React from 'react'
import './Footer.css'
import footer_logo from '../assests/logo.jpg'
import instargram_icon from '../assests/instagram_icon.png'
import pintester_icon from '../assests/pintester_icon.png'
import whatsapp_icon from '../assests/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Ofiices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-containeer">
                <img src={instargram_icon} alt="" />
            </div>
            <div className="footer-icons-containeer">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-containeer">
                <img src={whatsapp_icon} alt="" />
            </div>
            <div>
                <div className="footer-copyright">
                    <hr />
                    <p>Coporight @ 2023 - All Right Reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
