import { GET_CELEBRITIES } from "./actions";
import { UPDATE_CELEBRITY } from "./actions";

const inicialState = {
  celebrities: [],
};

export default function userReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_CELEBRITIES:
      return {
        ...state,
        celebrities: action.payload,
      };
    case UPDATE_CELEBRITY:
      const newCelebrity = state.celebrities.filter((celebrity) => {
        return celebrity.celebrity_id === action.payload.celebrity_id;
      });
      if (action.payload.property_to_update === "positive") {
        newCelebrity[0].votes.positive = action.payload.update_value;
      } else {
        newCelebrity[0].votes.negative = action.payload.update_value;
      }
      const newState = state.celebrities.filter((celebrity) => {
        return celebrity.celebrity_id !== action.payload.celebrity_id;
      });
      newState.push(newCelebrity[0]);
      return {
        ...state,
        celebrities: newState,
      };
    default:
      return {
        ...state,
      };
  }
}
