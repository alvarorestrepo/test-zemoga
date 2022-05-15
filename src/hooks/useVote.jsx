import { apiUpdateCelebrityVotes } from "../redux/actions";

export const useVote = ({
  setVotePositive,
  votePositive,
  setVoteNegative,
  voteNegative,
  dispatch,
}) => {
  const voteSelection = (value, type) => {
    if (type === "positive") {
      setVotePositive(!votePositive);
      if (type === "positive" && value === true) {
        setVoteNegative(null);
      }
    } else {
      setVoteNegative(!voteNegative);
      if (type === "negative" && value === true) {
        setVotePositive(null);
      }
    }
  };
  const sentVoteCelebrity = (id, positive, negative) => {
    console.log(id, positive, negative);
    if (votePositive || voteNegative) {
      if (votePositive) {
        dispatch(apiUpdateCelebrityVotes(id, "positive", positive + 1));
        setVotePositive(null);
        setVoteNegative(null);
      }
      if (voteNegative) {
        console.log("voto negativo");
        dispatch(apiUpdateCelebrityVotes(id, "negative", negative + 1));
        setVotePositive(null);
        setVoteNegative(null);
      }
    } else {
      alert("Debes seleccionar uno de los dos votos");
    }
  };
  return { voteSelection, sentVoteCelebrity };
};
