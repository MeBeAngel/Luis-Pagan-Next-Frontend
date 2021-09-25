import React from "react";

export default function RecruitCard(props) {
  return (
    <div className="recruit-item">
      <div className="recruit-item__bg"></div>
      <div className="recruit-item__img">
        <img src={props.recruitImage} alt={props.alt} />
      </div>
      <p className="recruit-name">{props.recruitName}</p>
      <p className="recruit-enlistment">{props.doe}</p>
      <p className="recruit-rank">{props.rank}</p>
      <p className="recruit-mos"><span></span>{props.mos}</p>
      <p className="fun-fact">{props.funFact}</p>
    </div>
  );
}
