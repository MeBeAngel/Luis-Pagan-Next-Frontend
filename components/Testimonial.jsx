import { React, useState, useEffect } from "react";
import PlayIcon from "../public/images/play.svg";
import PauseIcon from "../public/images/pause.svg";
import ResetIcon from "../public/images/reset.svg";
import Image from "next/image";

export default function TestimonialLeft(props) {
  ////////// Testimony API Call and state //////////
  const [testimonyOne, setTestimonyOne] = useState([]);
  const [testimonyTwo, setTestimonyTwo] = useState([]);

  useEffect(() => {
    fetch("https://luis-pagan-backend.herokuapp.com/testimony-1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTestimonyOne(data));
  }, []);
  /////////////////////////////////////////////

  useEffect(() => {
    const video = document.getElementsByClassName("video");

    for (var i = 0; i < video.length; i++) {
      video[i].onended = (e) => {
        e.target.offsetParent.children[1].style.display = "none";
        e.target.offsetParent.children[2].style.display = "none";
        e.target.offsetParent.children[3].style.display = "flex";
      };
    }
  }, []);

  function play(e) {
    let video = e.target.closest(".testimonial__video").querySelector("video");
    let play = e.target.closest(".play-icon");
    let pause = e.target.closest(".testimonial__video").querySelector(".pause-icon");
    play.style.display = "none";
    pause.style.display = "block";
    video.play();
  }

  function pause(e) {
    let video = e.target.closest(".testimonial__video").querySelector("video");
    let play = e.target.closest(".testimonial__video").querySelector(".play-icon");
    let pause = e.target.closest(".pause-icon");
    pause.style.display = "none";
    play.style.display = "flex";
    video.pause();
  }

  function reset(e) {
    let reset = e.target.closest(".reset-icon");
    let pause = e.target.closest(".testimonial__video").querySelector(".pause-icon");
    let video = e.target.closest(".testimonial__video").querySelector("video");
    reset.style.display = "none";
    pause.style.display = "block";
    video.currentTime = 0;
    video.play();
  }

  return (
    <div className={`testimonial-wrapper ${props.class}`}>
      <div className="testimonial">
        <div className={`testimonial__video ${props.leftVideo}`}>
          <video
            className="video"
            width="100%"
            height="100%"
            muted="muted"
            poster={props.poster}
            src={props.videoUrl}
          ></video>
          <div className="play-icon" onClick={play}>
            <Image src={PlayIcon} alt="" />
          </div>
          <div className="pause-icon">
            <Image src={PauseIcon} alt="" onClick={pause} />
          </div>
          <div className="reset-icon">
            <Image src={ResetIcon} alt="" onClick={reset} />
          </div>
        </div>
        <div className="testimonial__info gray bold">
          <div className={`info-block ${props.bioClass}`}>
            <p className="quote">{`"${testimonyOne.quote}"`}</p>
            <p className="name">
              <span className="name__inner-text">
                name <span className="background-black block"></span>{" "}
                {testimonyOne.name}
              </span>
            </p>
            <p className="date">
              <span className="date__inner-text">
                date <span className="background-black block date-block"></span>
                {testimonyOne.date}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}











export function TestimonialRight(props) {
  ////////// Testimony API Call and state //////////
  const [testimonyTwo, setTestimonyTwo] = useState([]);

  useEffect(() => {
    fetch("https://luis-pagan-backend.herokuapp.com/testimony-2", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTestimonyTwo(data));
  }, []);
  /////////////////////////////////////////////

  useEffect(() => {
    const video = document.getElementsByClassName("video");

    for (var i = 0; i < video.length; i++) {
      video[i].onended = (e) => {
        e.target.offsetParent.children[1].style.display = "none";
        e.target.offsetParent.children[2].style.display = "none";
        e.target.offsetParent.children[3].style.display = "flex";
      };
    }
  }, []);

  function play(e) {
    let video = e.target.closest(".testimonial__video").querySelector("video");
    let play = e.target.closest(".play-icon");
    let pause = e.target.closest(".testimonial__video").querySelector(".pause-icon");
    play.style.display = "none";
    pause.style.display = "block";
    video.play();
  }

  function pause(e) {
    let video = e.target.closest(".testimonial__video").querySelector("video");
    let play = e.target.closest(".testimonial__video").querySelector(".play-icon");
    let pause = e.target.closest(".pause-icon");
    pause.style.display = "none";
    play.style.display = "flex";
    video.pause();
  }

  function reset(e) {
    let reset = e.target.closest(".reset-icon");
    let pause = e.target.closest(".testimonial__video").querySelector(".pause-icon");
    let video = e.target.closest(".testimonial__video").querySelector("video");
    reset.style.display = "none";
    pause.style.display = "block";
    video.currentTime = 0;
    video.play();
  }

  return (
    <div className={`testimonial-wrapper ${props.class}`}>
      <div className="testimonial">
        <div className={`testimonial__video testimony-two__left-video ${props.leftVideo}`}>
          <video
            className="video"
            width="100%"
            height="100%"
            muted="muted"
            poster={props.poster}
            src={props.videoUrl}
          ></video>
          <div className="play-icon" onClick={play}>
            <Image src={PlayIcon} alt="" />
          </div>
          <div className="pause-icon">
            <Image src={PauseIcon} alt="" onClick={pause} />
          </div>
          <div className="reset-icon">
            <Image src={ResetIcon} alt="" onClick={reset} />
          </div>
        </div>
        <div className="testimonial__info gray bold">
          <div className={`info-block ${props.bioClass}`}>
            <p className="quote">{`"${testimonyTwo.quote}"`}</p>
            <p className="name">
              <span className="name__inner-text">
                name <span className="background-gray block"></span>{" "}
                {testimonyTwo.name}
              </span>
            </p>
            <p className="date">
              <span className="date__inner-text">
                date <span className="background-gray block date-block"></span>
                {testimonyTwo.date}
              </span>
            </p>
          </div>
        </div>
        <div className={`testimonial__video testimony-two__right-video ${props.leftVideo}`}>
          <video
            className="video"
            width="100%"
            height="100%"
            muted="muted"
            poster={props.poster}
            src={props.videoUrl}
          ></video>
          <div className="play-icon" onClick={play}>
            <Image src={PlayIcon} alt="" />
          </div>
          <div className="pause-icon">
            <Image src={PauseIcon} alt="" onClick={pause} />
          </div>
          <div className="reset-icon">
            <Image src={ResetIcon} alt="" onClick={reset} />
          </div>
        </div>
      </div>
    </div>
  );
}
