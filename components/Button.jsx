import React from "react";

export default function Button(props) {
    return (
        <button className={props.btnClass} type={props.type} onClick={props.onClick}>{props.btnText}</button>
    );
}