//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React, { useState } from "react";
import Convert from "./Convert";
import DropDown from "./DropDown";
const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [langauge, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <DropDown
        label="Select a Langauge"
        options={options}
        selected={langauge}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert />
    </div>
  );
};
export default Translate;
