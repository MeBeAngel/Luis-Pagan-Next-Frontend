import { useState, useEffect } from "react";
import Link from 'next/link';
import TestimonialLeft, {TestimonialRight} from "../components/Testimonial";
import Benefits from "../components/Benefits";
import Recruits from "../components/Recruits";
import EmailRequest from "../components/EmailRequest";
import Button from "../components/Button";

export default function Home() {

// ########## State ########## //
  const [landingVideo, setLandingVideo] = useState([]);
  const [testimonyOne, setTestimonyOne] = useState([]);
  const [testimonyTwo, setTestimonyTwo] = useState([]);


// ########## API Calls ########## //
  useEffect(() => {

// ########## Landing Video ########## //
    fetch("https://luis-pagan-backend.herokuapp.com/landing-video", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setLandingVideo(data));

// ########## Testimony One ########## //
    fetch("https://luis-pagan-backend.herokuapp.com/testimony-1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTestimonyOne(data));

// ########## Testimony Two ########## //
    fetch("https://luis-pagan-backend.herokuapp.com/testimony-2", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTestimonyTwo(data));
  }, []);

  // ########## API End ########## //

  return (
    <div className="home-page-wrapper">
      <section className="home-page-jumbotron">
        <div className="jumbotron-overlay">
          <div>
            <h1>Find the Perfect JOB for you.</h1>
            <Link href='/mos'>
            <Button btnClass="jumbotron-btn yellow-btn" btnText="MORE INFO" />
            </Link>
          </div>
        </div>
        <video
          autoPlay="autoplay"
          muted="muted"
          playsInline="playsinline"
          loop="loop"
          src={landingVideo.video_url}
        ></video>
      </section>

      <Benefits />

      <TestimonialLeft
        class="background-gray gray-texture-bg"
        bioClass="black"
        poster={testimonyOne.poster_url}
        videoUrl={testimonyOne.video_url}
      />

      <Recruits />

      <TestimonialRight
        class="background-black black-texture-bg"
        bioClass="gray"
        poster={testimonyTwo.poster_url}
        videoUrl={testimonyTwo.video_url}
      />

      <EmailRequest />
    </div>
  );
}
