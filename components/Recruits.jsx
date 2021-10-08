import { React, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecruitCard from "../components/RecruitCard";

export default function Recruits(props) {
  ///// Checks for screen width changes
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1099px)" });
  const biggerScreens = useMediaQuery({ query: "(min-width: 1100px" });

  ///// Empty settings var for recruit slider. Settings are loaded in conditionally below according to screen width //////
  let settings = {};

  if (isMobile) {
    settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  } else if (isTablet) {
    settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
  } else if (biggerScreens) {
    settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
  }

  ////////// State for recruit cards //////////
  const [recruitCards, setRecruitCards] = useState([]);

  ////////// Strapi API call for Recruit Cards //////////
  useEffect(() => {
    fetch('https://luis-pagan-backend.herokuapp.com/recruit-cards?_sort=id:ASC', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setRecruitCards(data));
    
  }, []);

  
  return (
    <div className="background-yellow recruit-wrapper">
      <h1> MEET THE RECRUITS</h1>
      <p>
        Here are the soldiers that I've had the Honor of enlisting into the New
        York Army National Guard. Like every person you meet on a day to day
        basis, every one of my soldiers has a unique story and reason for
        wanting to join the greatest force in New York. Find out a little about
        them below.
      </p>

      <Slider className="slider" {...settings}>

        {recruitCards.map((recruit) => {
          return <RecruitCard
              key={recruit.id}
              recruitImage={recruit.image.url}
              recruitName={recruit.name}
              doe={recruit.enlistment}
              rank={recruit.rank}
              mos={recruit.mos}
              funFact={recruit.fact}
            />
        })}

        
      </Slider>
    </div>
  );
}
