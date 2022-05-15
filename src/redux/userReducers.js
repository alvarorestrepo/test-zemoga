import { GET_CELEBRITIES } from "./actions";
import { UPDATE_CELEBRITY } from "./actions";
import { UPDATE_AGAIN_VOTE } from "./actions";

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
        newCelebrity[0].update = action.payload.update;
      } else {
        newCelebrity[0].votes.negative = action.payload.update_value;
        newCelebrity[0].update = action.payload.update;
      }
      const newState = state.celebrities.filter((celebrity) => {
        return celebrity.celebrity_id !== action.payload.celebrity_id;
      });
      newState.push(newCelebrity[0]);
      return {
        ...state,
        celebrities: newState,
      };

    case UPDATE_AGAIN_VOTE:
      const newCelebrityAgaine = state.celebrities.filter((celebrity) => {
        return celebrity.celebrity_id === action.payload.celebrity_id;
      });
      if (action.payload.property_to_update === "positive") {
        newCelebrityAgaine[0].update = action.payload.update;
      } else {
        newCelebrityAgaine[0].update = action.payload.update;
      }
      const newStateAgaine = state.celebrities.filter((celebrity) => {
        return celebrity.celebrity_id !== action.payload.celebrity_id;
      });
      newStateAgaine.push(newCelebrityAgaine[0]);
      return {
        ...state,
        celebrities: newStateAgaine,
      };
    default:
      return {
        ...state,
      };
  }
}
