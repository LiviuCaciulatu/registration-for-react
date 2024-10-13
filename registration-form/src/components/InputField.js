import React from "react";

function InputField(props) {
  const className = props.className;
  const type = props.type;
  const label = props.label;
  const value = props.value;

  const onChange = props.onChange;

  return (
    <div className="">
      <label>{label}</label>
      <input
        className={className}
        type={type}
        name={className}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;