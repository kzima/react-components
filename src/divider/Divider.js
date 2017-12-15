import React from "react";
import "./divider.css";

const CustomDivider = ({ light }) => {
    const backgroundColor = light ? "#ccc" : "#000";
    return <hr style={{ backgroundColor }}/>;
};

export default CustomDivider;