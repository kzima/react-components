import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { text, number, boolean } from "@storybook/addon-knobs";
import { withKnobs } from "@storybook/addon-knobs";
import Avatar from 'material-ui/Avatar';

import BenefitOverlay from "./BenefitOverlay";
import withMuiTheme from "../.storybook/MuiDecorator";

addDecorator(withMuiTheme);
addDecorator(withKnobs);

storiesOf("Dialog", module).add("Dialog Test", () => {
    //how to take avatar as paramater?
    const item = [{
        icon: text("People", "http://www.entertainmentearth.com/images/AUTOIMAGES/DC82517lg.jpg"), 
        description: text("Description", `Find out who else is in your Hostel at the same time`),
        extraInfo: text("Extra Info", "Coming soon...")},

        {icon: text("Mood", ""), 
        description: text("Description", `See what everyone in your hostel is up to`),
        extraInfo: text("Extra Info", "Coming soon...")},
        
        {icon: text("Deals", ""), 
        description: text("Description", `Get discounts by finding others to join your Bookings`),
        extraInfo: text("Extra Info", "Coming soon...")}
        ];
  
    return (
    <BenefitOverlay item={item}/>

    );
});

