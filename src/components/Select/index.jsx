import { useState } from "react";
import selectCheckIcon from "../../assets/img/select.svg";

import "./select.css";
function Select({ setSelectCheck, selectCheck }) {
  const [openList, setOpenList] = useState(false);
  return (
    <div className="select" onClick={() => setOpenList(!openList)}>
      <span>{!selectCheck ? "Grid" : "List"}</span>
      <img className="select_img" src={selectCheckIcon} alt="check" />
      {openList && (
        <ul className="select_list">
          <li className="list" onClick={() => setSelectCheck(true)}>
            <span className="list_span">List</span>
          </li>
          <li className="list" onClick={() => setSelectCheck(false)}>
            <span className="list_span">Grid</span>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Select;
