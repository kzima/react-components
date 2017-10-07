import React from "react";
import { withStyles } from "material-ui/styles";
import PropTypes from 'prop-types';
import Card, {CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';


const styles = theme => ({
    root: {
        margin: "auto",
        marginTop: 20,
        width: "100%", 
          
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
  const { classes, item } = props;
  const { icon, description, extraInfo } = item;

  return (
    <Card className={classes.root} raised={false}>
        <CardContent >
            <div className={classes.row}>
                <Avatar 
                    className={classes.avatar}
                    src={icon}>
                </Avatar>
            </div>    
            <Typography align="center" type="body1" className={classes.title}>
                {`${description}`}
            </Typography>
            {extraInfo && <Typography align="center" type="body2"  className={classes.title} >
                {`${extraInfo} `}
            </Typography>}
        </CardContent>
    </Card>
        
  );
};


export default withStyles(styles)(BenefitItem);




