import {
  ADD_STEPS_TO_FORM,
  REDUCE_STEPS_FROM_FORM
} from "../actions/applicationFormStepActions";

const initialState = {
  step: 1
};

export function formStepChange(state = initialState, action) {
  switch (action.type) {
    case ADD_STEPS_TO_FORM:
      return { step: state.step + 1 };
    case REDUCE_STEPS_FROM_FORM:
      return { step: state.step - 1 };
    default:
      return state;
  }
}
