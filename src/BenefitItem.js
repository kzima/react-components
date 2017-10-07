import React from "react";
import { withStyles } from "material-ui/styles";
import PropTypes from 'prop-types';
import CardContent from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';


const styles = theme => ({
    root: {
        margin: "auto",
        marginTop: 20,
        width: "100%",
        maxWidth: 360,
        padding: 10,
        
      },
    title: {
        //how to get text aligned? textalign doesn't work
        marginBottom: 16,
        fontSize: 16,
        color: theme.palette.secondary[500],
    },
    avatar: {
        margin: 10,
        width: 60,
        height: 60,
        background: theme.palette.primary[500],

    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
});


const BenefitItem = props => {
  if(!props.item.description){
    return null;
  }
  
  const { classes, item } = props;
  const { icon, description, extraInfo } = item;

  return (
        <CardContent className={classes.root} >
            <div className={classes.row}>
                <Avatar 
                    className={classes.avatar}
                    src={icon}>
                </Avatar>
            </div>    
            <Typography type="body1" className={classes.title}>
                {`${description}`}
            </Typography>
            <Typography type="body2"  className={classes.title} >
                {`${extraInfo} `}
            </Typography>
        </CardContent>
  );
};


export default withStyles(styles)(BenefitItem);




