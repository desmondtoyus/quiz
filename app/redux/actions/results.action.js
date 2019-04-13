import {
  RESULTS,
  RESET_REDUCER,
} from './types';

export const resetReducer = () => (dispatch) => {
  dispatch({ type: RESET_REDUCER });
};
export const resultsInputChange = ({ prop, value }) => (dispatch) => {
  dispatch({ type: RESULTS, prop, value });
};
