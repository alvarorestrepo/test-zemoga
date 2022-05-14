import "./row.css";
import RangeVote from "../RangeVote";
import badHand from "../../assets/img/thumbs-down.svg";
import goodHand from "../../assets/img/thumbs-up.svg";

function Row({ name, description, lastUpdated, picture, positive, negative }) {
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
          <p className="row_time">{lastUpdated}</p>
        </div>
        <button className="row_positive">
          <img className="row_img" src={goodHand} alt="good" />
        </button>
        <button className="row_negative">
          <img className="row_img" src={badHand} alt="bad" />
        </button>
        <button className="row_sendVote">
          <span className="row_sendVote_text">Vote Now</span>
        </button>
        <div className="row_rangeContend">
          <RangeVote votePositive={positive} voteNegative={negative} />
        </div>
      </div>
    </div>
  );
}

export default Row;
