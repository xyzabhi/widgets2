import React from "react";
import Accordion from "./components/Accordion";
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

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

export default App;
