import React from "react";
import "./ListItem.css";

class LI extends React.Component {
    render() {
        const btn = ({ button }) => {
            if(button) {
                return <button className="libtn">default</button>;
            }
            return null;
        };

        return (      
            <div className="component">
              <p>This component has {React.Children.count(this.props.children)} children.</p>
              {this.props.children}       
            </div>      
          );
    }
  }

export default LI;