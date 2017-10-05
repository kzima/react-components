import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number, array } from "@storybook/addon-knobs";
import withMuiTheme from "../.storybook/MuiDecorator";
import TestArray from "./TestArray";

import PropTypes from 'prop-types';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

addDecorator(withMuiTheme);
addDecorator(withKnobs);

storiesOf("Names", module).add("Names", () => {
    const nameLabel = 'Names';
    const arrayOfNames = ["James", "Jazzmas", "Adzzzams", "Alberta"];
    const names = array(nameLabel, arrayOfNames);
    const content = `I am  ${names}`;
    return (<div>{content} <br/>
    <TestArray names={arrayOfNames}/>
    </div>
    

    );
});
