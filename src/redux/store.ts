import { createStore } from 'redux';
import reducer from './reducer';
import data from './data.json';

const store = createStore(
  // @ts-ignore
  reducer,
  data,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
