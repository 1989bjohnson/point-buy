import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Attribute() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs>
        <Paper className={classes.paper}>{this.props.attributeName}</Paper>
      </Grid>
    </div>
  );
}

// class Attribute extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <Row className="attribute show-grid">
//         <Col xs={6}>
//           <Row>
//             <Col xs={3} className="attribute-title">
//               {this.props.attributeName}
//             </Col>
//             <Col xs={3} className="attribute-base">
//               8
//             </Col>
//             <Col xs={3} className="attribute-plus-sign">
//               +
//             </Col>
//             <Col xs={3} className="attribute-racial-adjustment">
//               1
//             </Col>
//           </Row>
//         </Col>

//         <Col xs={6}>
//           <Row>
//             <Col xs={3} className="attribute-equal-sign">
//               =
//             </Col>
//             <Col xs={3} className="attribute-score">
//               9
//             </Col>
//             <Col xs={3} className="attribute-mod">
//               -1
//             </Col>
//             <Col xs={3} className="attribute-point-cost">
//               0
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//     );
//   }
// }

// export default Attribute;
