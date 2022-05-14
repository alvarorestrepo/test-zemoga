import "./row.css";

function Row() {
  return (
    <div className="row">
      <div className="row_picture">
        <img
          className="row_pic"
          src="https://www.rionegro.com.ar/wp-content/uploads/2022/05/Musk.jpg"
          alt="personaje"
        />
        <div className="row_background" />
      </div>
    </div>
  );
}

export default Row;
