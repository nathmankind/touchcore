import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import LineGraph from "smooth-line-graph";

const props = {
  name: "simple",
  width: 80,
  height: 40,
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
        [15, 49],
      ],
      color: "#FFB200",
    },
  ],
};

export const InfoCard = ({ header, number, icon, graph }) => {
  return (
    <div className="exchangeCard">
      <div className="left-col">
        <div className="header">{header}</div>
        <div className="cardNumber">
          <h1>{number}</h1>
          <div>
            <LineGraph {...props} />
          </div>
        </div>
      </div>
      <div className="right-col">
        <div>
          <img src={icon} alt="icon" />
        </div>
        <div>
          Today <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
};
