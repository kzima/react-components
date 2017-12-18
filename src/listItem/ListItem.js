import React from "react";
import "./listItem.css";
// import HomeIcon from "material-ui-icons/Home";

const ListItem = props => {
  const { hover, children } = props;
  console.log(hover);
  // <HomeIcon />;
  const hovercontrol = hover ? "listItem hover" : "";
  console.log(hovercontrol);
  return <div className={hovercontrol}>{children}</div>;
};

export default ListItem;
