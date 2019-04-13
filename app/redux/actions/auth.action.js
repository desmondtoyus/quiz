import {
  AUTH,
  RESET_REDUCER,
} from './types';

export const resetReducer = () => (dispatch) => {
  dispatch({ type: RESET_REDUCER });
};
export const authInputChange = ({ prop, value }) => (dispatch) => {
  dispatch({ type: AUTH, prop, value });
};
