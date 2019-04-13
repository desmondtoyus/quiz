import {
  SHARED,
  RESET_REDUCER,
} from './types';

export const resetReducer = () => (dispatch) => {
  dispatch({ type: RESET_REDUCER });
};
export const sharedInputChange = ({ prop, value }) => (dispatch) => {
  dispatch({ type: SHARED, prop, value });
};
