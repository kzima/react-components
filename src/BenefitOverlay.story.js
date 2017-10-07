import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { text, number, boolean } from "@storybook/addon-knobs";
import { withKnobs } from "@storybook/addon-knobs";
import Avatar from 'material-ui/Avatar';

import BenefitItem from "./BenefitItem";
import withMuiTheme from "../.storybook/MuiDecorator";

addDecorator(withMuiTheme);
addDecorator(withKnobs);

storiesOf("Dialog", module).add("Dialog Test", () => {
    //how to take avatar as paramater?
    const item = {icon: text("Deals", "h"), 
        description: text("Description", `Get discounts by finding others to join your Bookings`),
        extraInfo: text("Extra Info", "Coming soon...")};
  
    return (
    <BenefitItem item={item}/>

    );
});

