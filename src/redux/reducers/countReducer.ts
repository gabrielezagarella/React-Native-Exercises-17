import { COUNT_ACTIONS, CountAction, CountProps } from "../actions/countAction";

const initialState: CountProps = {
  count: 0,
};

const countReducer = (state = initialState, action: CountAction) => {
  // console.log('action', action);
  // console.log('state', state);

  switch (action.type) {
    case COUNT_ACTIONS.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case COUNT_ACTIONS.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
export default countReducer;
