import { createStore, compose} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create  object for default data

const defaultstate = {
    posts,
    comments
};

const enhancers = compose(
    window.devToolExtension ? window.devToolExtension() : f => f
)

const store = createStore(rootReducer,defaultstate ,enhancers);
const history = syncHistoryWithStore(browserHistory,store);

if (module.hot){
    module.hot.accept('./reducers',() => {
        const nextRootReducer = require('./reducers/index');
        store.replaceReducer(nextRootReducer);
    });
}

export default store;