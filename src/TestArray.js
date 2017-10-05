import React from "react";
import {List, ListItem, makeSelectable} from 'material-ui/List';

const testArray =  ({ names }) => {

  return (

    <div className="helloClass"> {
        names.map((names) => (
          <div key={names}> <br/>
            <div>{`The ${names} is the right name.`}</div>
          </div>
        ))}
    </div>
  );
};


export default testArray;

