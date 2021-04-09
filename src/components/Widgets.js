import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "../styles/Widgets.css";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Chen loves Reactjs!", "Top news - 9999 readers")}
      {newsArticle("April fools day: Updates", "Top news - 6969 readers")}
      {newsArticle("Bitcoin going boom", "Top news - 13k readers")}
      {newsArticle("Redux is awesome!", "Top news - 1M readers")}
      {newsArticle("React is love!!!", "Top news - 99M readers")}
    </div>
  );
}

export default Widgets;
