import React from "react";
import Link from 'next/link';
import Button from "../components/Button";
import Image from 'next/image';

export default function Benefits(props) {

  const hideHex = {
    visibility: "hidden",
  };

  return (
    <div className="benefits">
      <h1 className="yellow">BENEFITS</h1>
      <ul id="grid" className="clear">
        <li>
          <div className="hexagon" style={hideHex}></div>
        </li>
        <li>
          <div className="hexagon" style={hideHex}></div>
        </li>
        <li>
          <div className="hexagon" style={hideHex}></div>
        </li>
        <li>
          <div className="hexagon" style={{ backgroundImage: `url("./images/benefit_401k.svg")`}}></div>
        </li>
        <li>
          <div className="hexagon" style={{ backgroundImage: `url("./images/benefit_health-care.svg")`}}></div>
        </li>
        <li>
          <div className="hexagon" style={{ backgroundImage: `url("./images/benefit_tuition.svg")`}}></div>
        </li>
        <li>
          <div className="hexagon" style={{ backgroundImage: `url("./images/benefit_sign-on.svg")`}}></div>
        </li>
        <li>
          <div className="hexagon" style={{ backgroundImage: `url("./images/benefit_life-insurance.svg")`}}></div>
        </li>
        <li>
          <div className="hexagon" style={{ backgroundImage: `url("./images/benefit_job-training.svg")`}}></div>
        </li>
        <li>
          <div className="hexagon" style={hideHex}></div>
        </li>
        <li>
          <div className="hexagon" style={hideHex}></div>
        </li>
        <li>
          <div className="hexagon" style={hideHex}></div>
        </li>
      </ul>
      <p className="yellow">FIND OUT HOW WE CAN HELP</p>
      <Link href="/form">
      <Button btnClass="sm-btn yellow-btn" btnText="REQUEST MORE INFO" />
      </Link>
    </div>
  );
}
