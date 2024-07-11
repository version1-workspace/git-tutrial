import "./index.css";
import React from "react";

type Props = {
  value: string;
  onChange: (e: React.SyntheticEvent<any>) => void;
}

export default function TextInput({ value, onChange }: Props) {
  return (<div className="text-input">
    <input
      className="text-input__form"
      placeholder="input ..."
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>);
}
