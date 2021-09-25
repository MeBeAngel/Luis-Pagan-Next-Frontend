import { useState, useEffect } from "react";
import Link from "next/link";
import MosCard from "../components/MosCard";
import Button from "../components/Button";

export default function MosPage() {
  ////////// Remove videoWrapper block after video ends //////////
  useEffect(() => {
    const video = document.getElementsByClassName("mos-video");
    const videoWrapper = document.querySelector(".mos-video-wrapper");
    const flipCardInner = document.querySelector(".flip-card-inner");

    for (var i = 0; i < video.length; i++) {
      video[i].onended = (e) => {
        videoWrapper.style.display = "none";
        flipCardInner.style.visibility = "visible";
      };
    }
  }, []);

  //////////////////////////////////////////////////////////////////////////////////////////
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Opens MOS card video overlay
  function openOverlay(e) {
    const videoWrapper =
      e.target.parentNode.parentNode.parentNode.parentNode.children[0];
    const videoWrapperInner = e.target.parentNode.parentNode;
    const mosVideo = videoWrapper.children[0];

    videoWrapper.style.display = "block";
    videoWrapperInner.style.visibility = "hidden";
    mosVideo.play();

    setIsVideoOpen(true);
  }

  // Closes mos card video overlay, pauses video and resets video current time back to 0
  function closeOverlay(e) {
    if (isVideoOpen === true) {
      const mosVideoWrapper =
        document.getElementsByClassName("mos-video-wrapper");
      const flipCardInner = document.getElementsByClassName("flip-card-inner");
      const mosVideo = document.getElementsByClassName("mos-video");

      for (let i = 0; i < mosVideoWrapper.length; i++) {
        mosVideoWrapper[i].style.display = "none";
      }

      for (let i = 0; i < mosVideo.length; i++) {
        mosVideo[i].pause();
        mosVideo[i].currentTime = 0;
      }

      for (let i = 0; i < flipCardInner.length; i++) {
        flipCardInner[i].style.visibility = "visible";
      }

      setIsVideoOpen(false);
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////////



    ////////// State for MOS cards //////////
    const [mosCards, setMosCards] = useState([]);

    ////////// Strapi API call for MOS Cards //////////
    useEffect(() => {
      fetch('https://luis-pagan-backend.herokuapp.com/mos-cards', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => setMosCards(data));
      
    }, []);
    /////////////////////////////////////////////////

  return (
    <div className="mos-page" onClick={closeOverlay}>
      <div className="mos-page__intro">
        <h1>FIND YOUR MOS</h1>
        <p>
          Which direction does your life path plan to take you? Which career
          piques your interest? Whether you’re sure of what you want to do or
          have no idea - the Army National Guard has you covered! With a
          plethora of career paths and vital jobs the National Guard is here to
          make sure that the only direction you go, is up. While there are
          hundreds of jobs to pursue, we are showcasing this year’s top ten
          M.O.S’s to give you look into some popular jobs.
        </p>
        <Link href="/form">
          <Button
            btnClass="sm-btn black-btn white bold"
            btnText="Find Out More"
          />
        </Link>
      </div>
      <div className="mos-wrapper">
        

        {mosCards.map((card) => {
          return <MosCard
          key={card.id}
          mosTitle={card.title}
          mosNumber={card.number}
          mosDescription={card.description}
          mosImg={card.image.url}
          videoUrl={card.video_url}
          btnOnClick={openOverlay}
          videoOnClick={closeOverlay}
        />
        })}
      </div>
    </div>
  );
}
