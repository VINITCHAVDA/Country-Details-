import React from "react";

export default function Headar() {
  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <h2 className="title">
            <a href="/">wher in the world?</a>
          </h2>
          <p className="theme-changer">
            <i className="fa-regular fa-moon"></i>
            Dark mood
          </p>
        </div>
      </header>
    </>
  );
}
