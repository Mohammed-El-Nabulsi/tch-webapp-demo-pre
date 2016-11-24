import { render } from 'react-dom';
import { Router, IndexRoute, Route, hashHistory  } from 'react-router';

import Layout from './layout';
import Overview from './Sites/Common/overview';


render(
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
  			<IndexRoute                          components={{ content: Overview }}/>
            <Route path="about"             	 components={{ content: require('./Sites/About/content.jsx').default }}/>
            <Route path="articles/1"             components={{ content: require('./Sites/Articles/content.jsx').default }}/>
      </Route>
    </Router>
    ,
  document.getElementById('app'),
  () => document.title = 'Mo\'s Blog'
);
