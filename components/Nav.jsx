import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Btn from "./Button";
import Logo from "../public/images/logo.svg";

export default function Nav(props) {
  // Saves open and closed state of Nav overlay
  const [showNavOverlay, setShowNavOverlay] = useState(false);

  // Collects current page url
  const router = useRouter();

  // Holds the state of the current page url
  const [url, setUrl] = useState(router.pathname);

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setUrl(url);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  // Display page title text based on current page url
  function pageTitle() {
    if (url === "/about") {
      return "ABOUT ME";
    } else if (url === "/mos") {
      return "TOP 10 MOS";
    } else if (url === "/form") {
      return "Form Page";
    } else {
      return "";
    }
  }

  // Logic for when to display nav get started button
  function btnLogic(str) {
    return url === "/" ? str : "";
  }

  // Open Nav overlay / dropdown menu
  function openOverlay() {
    document.querySelector(".drop-down-overlay").style.display = "flex";
    document.querySelector("html").style.overflow = "hidden";
    setShowNavOverlay(true);
  }

  // Close Nav overlay / dropdown menu
  function closeOverlay() {
    document.querySelector(".drop-down-overlay").style.display = "none";
    document.querySelector("html").style.overflow = "visible";
    setShowNavOverlay(false);
  }

  return (
    <div className="nav-wrapper">
      <nav className="background-black">
        <div className="logo" onClick={closeOverlay}>
          <Link href="/">
            <Image src={Logo} alt="" />
          </Link>
        </div>

        <Link href="/form">
          <Btn
            btnClass={btnLogic("nav-btn yellow-btn")}
            btnText={btnLogic("Get Started")}
            onClick={closeOverlay}
          />
        </Link>
        <h1 className="">{pageTitle()}</h1>

        {/*  Mobile Only */}
        <div
          onClick={showNavOverlay === false ? openOverlay : closeOverlay}
          className="drop-down"
        >
          {/* <i className={`fas fa-bars yellow`}></i> */}
          <FontAwesomeIcon icon={faBars} className="bars yellow" />
        </div>

        {/*  Desktop Only */}
        <div className="desktop-links">
          <Link href="/" onClick={closeOverlay}>
            <p className="link-reset link">HOME</p>
          </Link>
          <Link href="/about" onClick={closeOverlay}>
            <p className="link-reset link">ABOUT ME</p>
          </Link>
          <Link href="/mos" onClick={closeOverlay}>
            <p className="link-reset link">TOP 10 M.O.S</p>
          </Link>
        </div>
      </nav>

      {/*  Mobile Only */}
      <div className="drop-down-overlay" onClick={closeOverlay}>
        <div className="drop-down__links">
          <Link href="/" onClick={closeOverlay}>
            <p className="link-reset link">HOME</p>
          </Link>
          <Link href="/about" onClick={closeOverlay}>
            <p className="link-reset link">ABOUT ME</p>
          </Link>
          <Link href="/mos" onClick={closeOverlay}>
            <p className="link-reset link">TOP 10 M.O.S</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
