import React, { useState } from "react";
import "./Heading.css";

const Heading = () => {
  return (
    <div className="Head">
      <div><img src="/Icons/Markethub Logo.png"/></div>
      <button className="Exit">
        <img src="/Icons/Exit/Close/24/Vector.svg" />
        Exit
      </button>
    </div>
  );
};

export default Heading;
