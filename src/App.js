import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Helmet from 'react-helmet-async';

import './App.css';
import 'basscss/css/basscss.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SqlText from './components/SqlText';

const meta = {
  title: 'dblint.io',
  desc:
    'DbLint: Database Engineer Tools'
};

const App = ({ routes, initialData }) => {
  return (
    <div className="App">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.desc} />
        <meta
          name="keywords"
          content="redshift rds mysql postgres"
        />
        <meta
          name="google-site-verification"
          content="WNcBL13IjFpiVkI6Tu86Kc0kLsXr5Hv5kkOKYixCxfs"
        />
        <meta property="og:description" content={meta.desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="dblint.io" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:url" content="https://dblint.io/" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/7658554/42420108-261a1c5a-82eb-11e8-8ac0-ce2e0245e0ff.png"
        />

        <meta name="robots" content="index, follow" />
      </Helmet>
      <Switch>
        <Route key="1" path="/sql-formatter" exact component={SqlText} />
        <Redirect from="/" to="/sql-formatter"/>
      </Switch>
    </div>
  );
};

export default App;
