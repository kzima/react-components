import "./ListItem.css";
import React from 'react';

let p = true;

class Greeting extends React.Component {
  render() {
    if(p){
      return <button className="libtn">Hello</button>;
    }
  }   
}
export default Greeting;