import React from "react";
import Btn from "../components/Button";

export default function MosCard(props) {
  return (
    <div className="mos-card-wrapper">
      <h2 className="card-title">{props.mosTitle}</h2>
      <div className="mos-card">
        <div className="mos-video-wrapper">
          <video
            id="mos-video"
            className="mos-video"
            muted="muted"
            src={props.videoUrl}
            onClick={props.videoOnClick}
          ></video>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front"
              style={{ backgroundImage: "url(" + props.mosImg + ")" }}
            >
              <p className="mos-num">{props.mosNumber}</p>
            </div>
            <div className="flip-card-back background-black">
              <p>{props.mosDescription}</p>
              <Btn
                btnClass="sm-btn yellow-btn"
                btnText="Watch Video"
                onClick={props.btnOnClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
