import React from "react";
import "./Divider.css";

const CustomDivider = ({ light }) => {
    let backgroundColor = light ? "#ccc" : "#000";

    return (
        <divider>
            <hr style={{ backgroundColor }}/>
        </divider>
        
    );
};

export default CustomDivider;