import React, { useState } from "react";
import Accordion from "./components/Accordion";
import DropDown from "./components/DropDown";
import Search from "./components/Search";

const items = [
  {
    title: "What is React ?",
    content: "React is a front end Library.",
  },
  {
    title: "Why use React ?",
    content: "React is favourite among the developers.",
  },
  {
    title: "How do you use React ?",
    content: "You use react by creating components.",
  },
];
const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <DropDown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
