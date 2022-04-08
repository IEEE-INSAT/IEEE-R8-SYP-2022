import React from "react";
import "./style.css";
import Logo from './../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin, } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div className="footer_content">
                <div className="upper_side">
                    <div className="description">
                        <img alt="logo" src={Logo} className="logo" />
                        <div className="desc_content">
                            The IEEE R8 Student and Young Professional Congress is the largest student event in all Region 8. It occurs every two years and gathers both students and young professionals members from all Sections in this Region. SYP’s main goal is to enhance and foster the engineering sense and capabilities through different activities both technically and culturally. It also provides an opportunity to network.
                        </div>
                    </div>
                    <div className="contacts">
                        <div className="contact_content">Stay in touch</div>
                        <div className="icons">
                            <FontAwesomeIcon className="icon" icon={faFacebookF} />
                            <FontAwesomeIcon className="icon" icon={faInstagram} />
                            <FontAwesomeIcon className="icon" icon={faTwitter} />
                            <FontAwesomeIcon className="icon" icon={faLinkedin} />
                        </div>
                    </div>
                </div>
                <div className="navigations">
                    <div className="navSection">Home</div>
                    <div className="navSection">About SYP</div>
                    <div className="navSection">Sponsors</div>
                    <div className="navSection">Program</div>
                    <div className="navSection">Team</div>
                    <div className="navSection">Registrations</div>
                    <div className="navSection">FAQ</div>
                </div>
                <div className="icons small">
                    <FontAwesomeIcon className="icon" icon={faFacebookF} />
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                    <FontAwesomeIcon className="icon" icon={faTwitter} />
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                </div>
                <div className="copyright">
                    © 2022&nbsp;<div className="subCpyRight">All rights reserved.</div>&nbsp;SYP
                </div>
            </div>

        </footer>
    );
}