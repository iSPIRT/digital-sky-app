export const ADD_STEPS_TO_FORM = "ADD_STEPS_TO_FORM";
export const REDUCE_STEPS_FROM_FORM = "REDUCE_STEPS_FROM_FORM";

export const formStepAddAction = step => {
  return dispatch => {
    dispatch(addStep());
  };

  function addStep() {
    return { type: ADD_STEPS_TO_FORM };
  }
};

export const formStepReduceAction = step => {
  return dispatch => {
    dispatch(reduceStep());
  };

  function reduceStep() {
    return { type: REDUCE_STEPS_FROM_FORM };
  }
};
