import React, { useEffect, useRef, useState } from "react";

const DropDown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) return;
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, true);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    else
      return (
        <div
          key={option.label}
          className="item"
          onClick={(e) => {
            onSelectedChange(option);
          }}
        >
          {option.label}
        </div>
      );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
      <div className="text" style={{ color: selected.value }}>
        {selected.label}
      </div>
    </div>
  );
};

export default DropDown;