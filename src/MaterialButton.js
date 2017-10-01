import React from "react";
import Button from "material-ui/Button";

const SampleButton = ({ primary }) => {
  return (
    <div>
      <Button raised color={primary ? "primary" : "ascent"}>
        Sample MAterial UI Button
      </Button>
    </div>
  );
};

export default SampleButton;
