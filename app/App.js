import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
// import SamplePage from './views/SamplePage';
import Home from './views/home';
import About from './views/about';

import PageNotFound from './views/PageNotFound';
import Main from './views/Main';

const App = () => (
  <div className="App">
    <Helmet titleTemplate="%s - SiteName" defaultTitle="Some default title">
      <meta name="description" content="some description content" />
    </Helmet>
    {/* BrowserRouter comes with default history */}
    <BrowserRouter>
      <div>
        <div className="main">
          <Switch>
            {/* <Route exact path="/" component={SamplePage} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/about" component={About} />
            <Route path="" component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
