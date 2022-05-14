import axios from "axios";

//CONSTANTES
export const GET_CELEBRITIES = "GET_CELEBRITIES";
export const UPDATE_VOTE = "UPDATE_VOTE";
export const UPDATE_CELEBRITY = "UPDATE_CELEBRITY";
export const SET_LOOGED = "SET_LOOGED";
export const VALIDATE_EMAIL = "VALIDATE_EMAIL";
export const UPDATE_USER = "UPDATE_USER";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const FEEDBACK = "FEEDBACK";
export const GET_PRODUCTS = "GET_PRODUCTS";

//Endpoints

const apiCelebrities =
  "https://486164eco4.execute-api.us-east-1.amazonaws.com/get-celebrities";

const apiUpdateCelebrity =
  "https://486164eco4.execute-api.us-east-1.amazonaws.com/update-celebrity-votes";

export const getCelebrities = () => {
  return (dispatch) => {
    axios
      .get(apiCelebrities)
      .then((res) => {
        if (res.data.data.length > 0) {
          dispatch({
            type: GET_CELEBRITIES,
            payload: res.data.data,
          });
        } else {
          alert("No hay celebridades para mostrar");
        }
      })
      .catch((err) => {
        console.log("error del catch", err);
      });
  };
};

export const apiUpdateCelebrityVotes = (
  celebrity_id,
  property_to_update,
  update_value
) => {
  const body = {
    celebrity_id,
    property_to_update,
    update_value,
  };
  return (dispatch) => {
    axios
      .patch(apiUpdateCelebrity, body)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: UPDATE_CELEBRITY,
          payload: {
            celebrity_id,
            property_to_update,
            update_value,
          },
        });
      })
      .catch((err) => {
        console.log("error del catch", err);
      });
  };
};
