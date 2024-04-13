import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="Footer shadow-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>Blog</span></h3>
                            <h6>© 2024 Blog All rights reserved</h6>
                            <p>Unleash your creativity, share your story. Explore, connect, and inspire others.</p>
                            <div className="footer-icons">
                                <FaFacebook className="icon" />
                                <FaTwitter className="icon" />
                                <FaInstagram className="icon" />
                                <FaLinkedinIn className="icon" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <Link to='/'>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/'>Blogs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/signin'>Sign in</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/'>Help & Support</Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-2">
                            <h5>Contact Us</h5>
                            <ul>
                                <li className='nav-item'><i className="fa-solid fa-phone-volume"></i>+91 9989982567</li>
                                <li className='nav-item'><i className="fa-solid fa-envelope"></i>yashwanthpothala04@gmail.com</li>
                                <li className='nav-item'><i className="fa-solid fa-paper-plane"></i>Hyderabad, India</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
