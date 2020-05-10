import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-1/p240x240/64954751_1197402987133909_451913714401017856_o.jpg?_nc_cat=106&_nc_sid=dbb9e7&_nc_oc=AQk8wBarq3BFtBqGT6eSVmyItCQa9Qb24XcIhvfoPrnIzpk0jOTNjwNPLd0FuU0bN7E&_nc_ht=scontent.ffcm1-2.fna&_nc_tp=6&oh=f4a758ed4707131e06bc9dc5b6033e32&oe=5EDB3C5F"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Charles Kraemer</h1>

            <hr/>

          <p>Python | C++ | JavaScript | HTML | Unix | React | NodeJS </p>
          </div>
        <div className="social-links">

            {/* Github */}
            <a href="https://github.com/ckraeme2" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/charles-k-7983bb139/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/ckraeme2/?hl=en" rel="noopener noreferrer" target="_blank">
              <i class="fa fa-instagram" aria-hidden="true" />
            </a>
          </div>
          <div className="resume-button">
            <a href="https://drive.google.com/open?id=1xcuVZc6I8QixCzYwFRBFsOKJlHGFEFi9" target="_blank">
              <i>
                <button type="button">View my Resume</button>
              </i>
            </a>
          </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
