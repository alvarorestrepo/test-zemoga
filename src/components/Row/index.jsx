import { useState } from "react";
import RangeVote from "../RangeVote";
import badHand from "../../assets/img/thumbs-down.svg";
import goodHand from "../../assets/img/thumbs-up.svg";
import { updateCelebrityAgaine } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useVote } from "../../hooks/useVote";
import "./row.css";

function Row({
  name,
  description,
  lastUpdated,
  picture,
  positive,
  negative,
  id,
  update,
}) {
  const [votePositive, setVotePositive] = useState(null);
  const [voteNegative, setVoteNegative] = useState(null);

  const dispatch = useDispatch();

  const borderColorVote = !votePositive
    ? "row_positive"
    : "row_positive_border";
  const borderColorVotebad = !voteNegative
    ? "row_negative"
    : "row_negative_border";

  const borderSend =
    !voteNegative && !votePositive ? "row_sendVote" : "row_borderSend";

  const { voteSelection, sentVoteCelebrity } = useVote({
    setVotePositive,
    votePositive,
    setVoteNegative,
    voteNegative,
    dispatch,
  });

  return (
    <div className="row">
      <div className="row_picture">
        <img className="row_pic" src={picture} alt="personaje" />
        <div className="row_background" />
        <div className="row_content_title">
          <span className="row_title">{name}</span>
        </div>
        <div className="row_content_text">
          <p className="row_description">{description.slice(0, 70)}...</p>
        </div>
        <div className="row_info_time">
          <p className="row_time">
            {update ? "Thank you for your vote!" : lastUpdated}
          </p>
        </div>
        {!update && (
          <>
            <button
              className={borderColorVote}
              onClick={() => voteSelection(true, "positive")}
            >
              <img className="row_img" src={goodHand} alt="good" />
            </button>
            <button
              className={borderColorVotebad}
              onClick={() => voteSelection(true, "negative")}
            >
              <img className="row_img" src={badHand} alt="bad" />
            </button>
          </>
        )}

        <button
          className={borderSend}
          onClick={() =>
            !update
              ? sentVoteCelebrity(id, positive, negative)
              : dispatch(updateCelebrityAgaine(id))
          }
        >
          <span className="row_sendVote_text">
            {!update ? "Vote Now" : "Vote Again"}
          </span>
        </button>
        <div className="row_rangeContend">
          <RangeVote votePositive={positive} voteNegative={negative} />
        </div>
      </div>
    </div>
  );
}

export default Row;
