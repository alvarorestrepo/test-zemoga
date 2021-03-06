import { useState } from "react";
import badHand from "../../assets/img/thumbs-down.svg";
import goodHand from "../../assets/img/thumbs-up.svg";
import RangeVote from "../RangeVote";
import { updateCelebrityAgaine } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useVote } from "../../hooks/useVote";
import moment from "moment";
import "./Card.css";

function Card({
  name,
  description,
  lastUpdated,
  picture,
  positive,
  negative,
  id,
  update,
  category,
}) {
  const [votePositive, setVotePositive] = useState(null);
  const [voteNegative, setVoteNegative] = useState(null);

  const dispatch = useDispatch();

  const borderColorVote = !votePositive
    ? "PositiveVote"
    : "PositiveVoteWithBorder";
  const borderColorVotebad = !voteNegative
    ? "NegativeVote"
    : "NegativeVoteWithBorder";

  const borderSend = !voteNegative && !votePositive ? "sendVote" : "borderSend";

  const { voteSelection, sentVoteCelebrity } = useVote({
    setVotePositive,
    votePositive,
    setVoteNegative,
    voteNegative,
    dispatch,
  });

  return (
    <div className="card">
      <div className="card_img_background">
        <img src={picture} alt={name} className="img_background" />
        <div className="background" />
        <button
          className={positive > negative ? "resultImgGood" : "resultImgBad"}
        >
          <img
            className="imgCard"
            src={positive > negative ? goodHand : badHand}
            alt="personaje"
          ></img>
        </button>
        <div className="card_content_title">
          <h2 className="title">{name}</h2>
        </div>
        <div className="card_content_text">
          <p className="description">{description.slice(0, 60)}...</p>
        </div>
        <div className="info_time">
          <p className="time">
            {update
              ? "Thank you for your vote!"
              : moment(lastUpdated, "YYYYMMDD").fromNow() + " in " + category}
          </p>
        </div>
        {!update && (
          <>
            <button
              className={borderColorVote}
              onClick={() => voteSelection(true, "positive")}
            >
              <img className="imgCard" src={goodHand} alt="good"></img>
            </button>
            <button
              className={borderColorVotebad}
              onClick={() => voteSelection(true, "negative")}
            >
              <img className="imgCard" src={badHand} alt="bad"></img>
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
          <span className="sendVote_text">
            {!update ? "Vote Now" : "Vote Again"}
          </span>
        </button>
        <div className="rangeContend">
          <RangeVote votePositive={positive} voteNegative={negative} />
        </div>
      </div>
    </div>
  );
}

export default Card;
