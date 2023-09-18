import React from "react";
import "./style.css";

const InputField = (props) => {
  return (
    <div className="input-container">
      <input
      className="input-field ff-work-sans"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
  
      />
      {props.error && props.isTouched ? (
        <p className="form-error">{props.error}</p>
      ) : null}
    </div>
  );
};

export default InputField;
