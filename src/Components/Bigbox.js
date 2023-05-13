import React from "react";
import "./Bigbox.css";
import arrow from "./Arrow-black.svg";
import "../App.css"

const Bigbox = (props) => {
  return (
    <div>
      <div
        className="react-reveal"
        style={{
          animationFillMode: "both",
          animationDuration: "1000ms",
          animationDelay: "0ms",
          animationIterationCount: "1",
          opacity: "1",
          animationName: "react-reveal-939016974709823-1",
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="servicesDescription">
              <div className="servicesH2">
                <h2>
                  {props.title}
                </h2>
              </div>
              <div className="servicesH3">
                <h3>
                  {props.description}
                </h3>
              </div>
              <div className="servicesP">
                <a href = {props.link}>
                  <p>
                    {props.linktext}
                  </p>
                  <img src= {arrow} alt="arrow-black" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
                className="serviceImage"
                src= {props.image}
                alt="servicesimage"
                />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bigbox;
