import 'es5-shim';
import 'es6-shim';
import 'es6-promise';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './store/routes';
import configureStore from './store/configure-store';

import './styles/index.pcss';
import './styles/foundation.css';
import './styles/style.css';
import './styles/fontawesome-webfont.ttf';
import './img/logo.png';

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

if (!__TEST__) {
  ReactDOM.render(
    <div>
      <Provider store={ store }>
        <Router history={ history } onUpdate={() => window.scrollTo(0, 0)}>
          { routes }
        </Router>
      </Provider>
    </div>,
    document.getElementById('root')
  );
}
