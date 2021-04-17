import React from "react";
import { ProgressBar } from "react-bootstrap";

export const AccentBar = () => {
  return (
    <div className="accentBarWrapper">
      <ProgressBar className="progressBar" now={60} />
    </div>
  );
};
