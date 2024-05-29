import "./Footerstyles.css";
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
//import React from 'react'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>123 Housing Society</p>
                            <p>Nepal</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            9861846184</h4>
                    </div>
                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            aneetabanjara27@gmil.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>This is me Anita Banjara, react developer currently working at IT Bridge.I enjoy discussing new projects and design challenges.</p>
                    <div className="social">
                        <FaFacebook
                            size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaLinkedin
                            size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaInstagram
                            size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
