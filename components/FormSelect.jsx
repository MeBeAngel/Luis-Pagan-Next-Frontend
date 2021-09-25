import React from "react";

// Form selector for Yes or No
export default function FormSelect(props) {
  return (
    <div className="form-question">
      <div className="question-inner">
        <p>{props.question}</p>
        <select className="form-select">
          <option selected>Select</option>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>
      </div>
    </div>
  );
}

// Form selector for age
export function FormSelectNum(props) {
  let num = props.num;
  let array = [];

  for (let i = 1; i <= num; i++) {
    array.push(
      <option key={i} id={i} value={props.valueName + i}>
        {i}
      </option>
    );
  }

  return (
    <div className="form-question">
      <div className="question-inner">
        <p>{props.question}</p>
        <select className="form-select">
          <option>Select</option>
          {array}
        </select>
      </div>
    </div>
  );
}

// Form Text Area
export function FormSelectTextArea(props) {
  return (
    <div className="form-question">
      <div className="question-inner">
      <div className="sub-question-wrapper">
        <p className={props.questionClass}>{props.question}</p>
        <textarea
          className="form-control"
          id={props.id}
          rows={props.rows}
          placeholder={props.placeholder}
        ></textarea>
        </div>
      </div>
    </div>
  );
}
