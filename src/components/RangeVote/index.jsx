import goodHand from "../../assets/img/thumbs-up.svg";
import badHand from "../../assets/img/thumbs-down.svg";
import "./rangeVote.css";
function RangeVote({ votePositive, voteNegative }) {
  let allData = votePositive + voteNegative;
  let positivePercentage = (votePositive * 100) / allData;
  let negativePercentage = (voteNegative * 100) / allData;

  return (
    <div>
      <div className="rangeVote">
        <div
          style={{
            width: `${positivePercentage}%`,
          }}
          className="rangeVote_content_positive"
        >
          <span className="icon_range">
            <img src={goodHand} alt="personaje" />
          </span>
          <span className="infoPersent">
            {Number.parseFloat(positivePercentage).toFixed(1)}%
          </span>
        </div>
        <div
          style={{
            width: `${negativePercentage}%`,
          }}
          className="rangeVote_content_negative"
        >
          <span className="icon_range">
            <img src={badHand} alt="personaje" />
          </span>
          <span className="infoPersent">
            {Number.parseFloat(negativePercentage).toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default RangeVote;
