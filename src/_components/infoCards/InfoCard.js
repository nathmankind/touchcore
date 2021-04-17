import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import LineGraph from "smooth-line-graph";

const props = {
  name: "simple",
  width: 50,
  height: 20,
  lines: [
    {
      key: "mykey",
      data: [
        [0, 0],
        [1, 1],
        [2, 4],
        [3, 9],
        [4, 16],
        [5, 0],
        [9, 25],
        [12, 36],
        [15, 40],
      ],
      color: "#FFB200",
    },
  ],
};

export const InfoCard = ({ header, number, icon, graph }) => {
  return (
    <div className="exchangeCard">
      <div className="first-row">
        <div className="header">{header}</div>
        <div>
          <img src={icon} alt="icon" />
        </div>
      </div>
      <div className="second-row">
        <div className="cardNumber">
          <h1>{number}</h1>
          <div>
            <LineGraph {...props} />
          </div>
        </div>
        <div className="today">
          <p>Today</p>
          <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
};
