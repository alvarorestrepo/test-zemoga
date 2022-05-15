import "./select.css";
function Select({ setSelectCheck, selectCheck }) {
  return (
    <select onChange={() => setSelectCheck(!selectCheck)} className="select">
      <option value="list">list</option>
      <option value="grid">Grid</option>
    </select>
  );
}

export default Select;
