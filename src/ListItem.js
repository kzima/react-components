import React from "react";
import "./listItem.css";
// import HomeIcon from "material-ui-icons/Home";

const ListItem = props => {
  const { hover, children } = props;
  console.log(hover);
  // <HomeIcon />;
  return <div className={"hover"}>{children}</div>;
};

export default ListItem;
