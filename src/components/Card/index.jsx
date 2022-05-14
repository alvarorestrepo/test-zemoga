import badHand from "../../assets/img/thumbs-down.svg";
import goodHand from "../../assets/img/thumbs-up.svg";
import RangeVote from "../RangeVote";
import "./Card.css";

function Card({ name, description, lastUpdated, picture, positive, negative }) {
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
          <p className="time">{lastUpdated}</p>
        </div>
        <button className="PositiveVote">
          <img className="imgCard" src={goodHand} alt="personaje"></img>
        </button>
        <button className="NegativeVote">
          <img className="imgCard" src={badHand} alt="personaje"></img>
        </button>
        <button className="sendVote">
          <span className="sendVote_text">Vote Now</span>
        </button>
        <div className="rangeContend">
          <RangeVote votePositive={positive} voteNegative={negative} />
        </div>
      </div>
    </div>
  );
}

export default Card;
