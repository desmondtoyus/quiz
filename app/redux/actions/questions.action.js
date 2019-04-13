import {
  QUESTIONS,
  RESET_REDUCER,
} from './types';

export const resetReducer = () => (dispatch) => {
  dispatch({ type: RESET_REDUCER });
};
export const questionsInputChange = ({ prop, value }) => (dispatch) => {
  dispatch({ type: QUESTIONS, prop, value });
};
