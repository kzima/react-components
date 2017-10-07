import React from "react";
import List from "material-ui/List";
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import Fade from 'material-ui/transitions/Fade';
import { withStyles } from "material-ui/styles";

import BenefitItem from "./BenefitItem";

const styles = theme => ({
    btnClass: {
        marginTop: 5,
        width: "100%",
        maxWidth: 40,
        float: "right",
        position: "absolute",
        left: "70%",
        
      },
    box3: {
        background: "black",
        float: "right",
        marginTop: '5',
        width: 30,
        borderRadius: "50%",
    },
    box3: {
        width: 30,
        
    },
    svg: {
        display: "block",
    },
    closeX: {
        stroke: "black",
        fill: "transparent",
        stringLinecap: "round",
        strokeWidth: 5, 
    }
});


const BenefitOverlay = props => {

    const { classes, item } = props;
    //set to display dialog until button login created
    this.state = {
        open: true,
      };
    
      const toggleDialog = state => {
          //ToDo : login to change state.open        
      };
    
    return (
        <div>
            <Dialog fullScreen open={this.state.open} onRequestClose={this.toggleDialog}
                    transition={Fade}> 
                    
                <Button className={classes.btnClass} onClick={() => toggleDialog(this.state.open)}>
                    <div className={classes.box} className={classes.box3}>
                        <svg viewBox="0 0 40 40">
                            <path className={classes.closeX} d="M 10,10 L 30,30 M 30,10 L 10,30"/>
                        </svg>
                    </div>
                </Button>                
                <dialogContent>
                    {item.map(item => <BenefitItem item={item} /> )}
                </dialogContent>
            </Dialog>
        </div>
    );
  };
  
  export default withStyles(styles)(BenefitOverlay);
  
  