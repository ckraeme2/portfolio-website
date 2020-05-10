import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="about-grid">
          <Cell col={12}>
            <img
              src="https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/828030"
              alt="nd"
              className="nd-img"
            />

            <div className="about-header">
              <h1>About Me</h1>

              <hr/>
            </div>
            <div className="about-body">
              <h1>Hi!  I'm Charles Kraemer.  I am currently a computer science and philosophy double major at the University of Notre Dame.</h1>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
