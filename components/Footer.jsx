import React from "react";
import Image from 'next/image';
import Link from "next/link";

// Social Icons
import FacebookYellow from "../public/images/facebook_yellow.svg";
import InstagramYellow from "../public/images/instagram_yellow.svg";
import LinkedinYellow from "../public/images/linkedin_yellow.svg";

export default function Footer(props) {

  return (
    <footer>
      <div className="footer-inner-wrapper">
      <div className="quick-links bold">
        <p className="quick-link">Quick Links</p>
        <Link className="link-reset yellow" href="/about">
          <p>About Me</p>
        </Link>
        <Link className="link-reset yellow" href="/mos">
          <p>Top 10 M.O.S</p>
        </Link>
        <Link className="link-reset yellow" href="/form">
          <p>Request Info</p>
        </Link>
      </div>
      <div className="social-media bold social-mobile">
        <p>CONNECT WITH ME</p>
        <div>
        <a href="https://www.facebook.com/">
              <Image src={FacebookYellow} alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <Image src={InstagramYellow} alt="" />
            </a>
            <a href="https://www.linkedin.com/">
              <Image src={LinkedinYellow} alt="" />
            </a>
        </div>
      </div>
      <div className="national-gaurd-contact-info bold">
        <p>New York Army National Guard Recruiting & Retention</p>
        <p>955 Washington Ave, Peekskill, NY 10566</p>
        <p>montalvo.l.pagan.mil@mail.mil</p>
        <p>(347) 865-8226</p>
      </div>
      <div className="social-media bold social-tablet">
        <p>CONNECT WITH ME</p>
        <div>
        <a href="https://www.facebook.com/">
              <Image src={FacebookYellow} alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <Image src={InstagramYellow} alt="" />
            </a>
            <a href="https://www.linkedin.com/">
              <Image src={LinkedinYellow} alt="" />
            </a>
        </div>
      </div>
      </div>
    </footer>
  );
}
