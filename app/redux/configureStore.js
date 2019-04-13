import { combineReducers } from 'redux';
import {
  sampleReducer,
  exampleReducer,
  questionsReducer,
  resultsReducer,
  authReducer,
  sharedReducer,

} from './reducers';

const configureStore = combineReducers({
  sample: sampleReducer,
  example: exampleReducer,
  questions: questionsReducer,
  results: resultsReducer,
  auth: authReducer,
  shared: sharedReducer,

});
export default configureStore;
