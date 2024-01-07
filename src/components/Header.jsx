import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <h1>Little Lemon</h1>
      <div className="flex-header">
        <div className="info">
          <h2>Chicago</h2>
          <p>
            Facilisis conubia eget justo mus luctus aenean tempus blandit curae,
            arcu quis viverra venenatis natoque nunc nisl eleifend in augue,
            diam hendrerit feugiat molestie montes sem parturient at.
          </p>
          <a className="button-reserve" href="#" role="button">
            Book a Table
          </a>
        </div>
        <img className="food" src="./images/food.jpg" alt="" />
      </div>
    </header>
  );
};

export default Header;
