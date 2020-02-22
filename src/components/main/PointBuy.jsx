import React, { Component } from "react";
import Attribute from "./Attribute";
import SelectRace from "./SelectRace";
import data from "../data/data";
// import { Grid } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default class PointBuy extends Component {
  const classes = useStyles();
  renderAttributes = data.attributes.map(name => (
    <Attribute attributeName={name} />
  ))
render() {
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {this.renderAttributes}
      </Grid>
    </div>
  )
}
}

// class PointBuy extends Component {
//   constructor(props) {
//     super(props);
//   }
//   renderAttributes = data.attributes.map(name => (
//     <Attribute attributeName={name} />
//   ));
//   render() {
//     return (
//       <div>
//         <SelectRace />
//         <Grid className="main-content">{this.renderAttributes}</Grid>
//       </div>
//     );
//   }
// }

export default PointBuy;
