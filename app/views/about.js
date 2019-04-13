import React from 'react';
import { Helmet } from 'react-helmet';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>About </title>
          <meta name="description" content="About description" />
        </Helmet>
        <h1>ABOUT Page!</h1>

      </div>
    );
  }
}

export default About;
