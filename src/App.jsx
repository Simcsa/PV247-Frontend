import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { LayoutSelector } from './containers/LayoutSelector.jsx';
import { createHistory } from './utils/createHistory';
import { createStore } from './utils/createStore';

const history = createHistory();
const store = createStore(history);

class Main extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <LayoutSelector />
            </ConnectedRouter>
        </Provider>
        );
  }
}

export default Main;