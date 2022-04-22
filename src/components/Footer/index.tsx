import React from "react";
import "./style.css";
import Logo from './../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import NavItems from "../../data/NavItems.json";
import SocialMedia from "../../data/SocialMedia.json";
import insatsb from "../../assets/images/IEEESB.png";

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
                            <a href={SocialMedia["facebook"]}><FontAwesomeIcon className="icon" icon={faFacebookF} /></a> 
                            <a href={SocialMedia["instagram"]}><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                            <a href={SocialMedia["twitter"]}><FontAwesomeIcon className="icon" icon={faTwitter} /> </a>
                            <a href={SocialMedia["linkedin"]}><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
                        </div>
                        <div className="contact_content" style={{ marginTop : "50px" }  }>Hosted By</div>
                        <a href="https://insat.ieee.tn/" ><img src={insatsb} alt="IEEE INSAT SB"  /></a> 
                    </div>
                </div>
                <div className="navigations">
                    {NavItems.map((item, i) => {
                        return (<Link to={item.path} key={i} className="navSection">{item.name}</Link>)
                    })}
                </div>
                <div className="small">
                    <a href="https://insat.ieee.tn/" ><img src={insatsb} alt="IEEE INSAT SB" width={120} /></a> 
                    <div className="icons">
                        <a href={SocialMedia["facebook"]}><FontAwesomeIcon className="icon" icon={faFacebookF} /></a> 
                        <a href={SocialMedia["instagram"]}><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                        <a href={SocialMedia["twitter"]}><FontAwesomeIcon className="icon" icon={faTwitter} /> </a>
                        <a href={SocialMedia["linkedin"]}><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
                    </div>
                </div>
                <div className="copyright">
                    © 2022&nbsp;<div className="subCpyRight">All rights reserved.</div>&nbsp;IEEE INSAT SB
                </div>
            </div>

        </footer>
    );
}