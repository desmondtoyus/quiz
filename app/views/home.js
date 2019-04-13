import React from 'react';
import { Helmet } from 'react-helmet';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Home </title>
          <meta name="description" content="Home description" />
        </Helmet>
        <h1>HOME Page!</h1>

      </div>
    );
  }
}

export default Home;
