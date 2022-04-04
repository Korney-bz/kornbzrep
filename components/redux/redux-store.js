import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

const reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;