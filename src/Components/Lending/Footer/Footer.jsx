// import Link from "next/link";
import React from "react";
import footerLogo from "../assets/images/only_logo_without_bg.png";
import styles from "./Footer.module.css";
import { ImageLink, navLinkData } from "@/Constants";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
      {ImageLink.map(({_id, title, link}) => (
        <div key={_id} className={styles.f}>
          <Link to={link}>
            <Image
              className={styles.FooterLogo}
              src={footerLogo}
              height={100}
              width={150}
              />
          </Link>
          <div>
            <p>BHARATIYA ROBOTICS</p>
          </div>
          <div className={styles.Logo}>
            <div className={styles.footerIcon}>
              <span>
                <a href="">
                  <FaFacebookF />
                </a>
              </span>
              <span>
                <a href="">
                  <FaInstagram />
                </a>
              </span>
              <span>
                <a href="">
                  <FaTwitter />
                </a>
              </span>
              <span>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </div>
          
        </div>
            ))}
        <div>
          <div className={styles.FooterLink}>
            <ul>
              {navLinkData.map(({ _id, title, link }) => (
                <li key={_id}>
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h1>BHARATIYA ROBOTICS</h1>
          <div className={styles.footerAddress}>
            <div>
              <p>
                <span>
                  <a href="">
                    <IoMdHome />
                  </a>
                </span>
                5th Floor, 83, Shyama Prasad Mukherjee Rd, Kolkata, West Bengal
                700026
              </p>
            </div>
            <div>
              <p>
                <span>
                  <a href="">
                    <MdCall />
                  </a>
                </span>
                +91 1234567890
              </p>
            </div>
            <div>
              <p>
                <span>
                  <a href="">
                    <SiGmail />
                  </a>
                </span>
                info@bhartiyarobotic.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
