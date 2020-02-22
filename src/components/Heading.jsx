import React, { Component } from 'react';

class Heading extends Component {
    render() { 
        const { title, headingLevel } = this.props;
        const Title = headingLevel;
        return ( 
            <React.Fragment>
                <Title>{title}</Title>
            </React.Fragment>
         );
    }
}
 
export default Heading;