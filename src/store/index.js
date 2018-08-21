import createStore from 'unistore';
import { Provider, connect } from 'unistore/react';

import initialState from 'store/initial-state';

const store = createStore(initialState);

export default store;
