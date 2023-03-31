import "./SideNav.scss";
import Loblawlogo from "../../assets/Photos-PNG/PC Logo.png";

export default function SideNav() {
  return (
    <div className="navbar">
      <header className="navbar-signup">
        <img src={Loblawlogo} />
        <div className="navbar-buttons">
          <button>SIGN UP</button>
          <p className="learnmore">Learn More</p>
        </div>
      </header>
      <div className="navbar-categories">
        <button className="active">Sale</button>
        <button>Recipes</button>
        <button>Buy it Again</button>
        <button>Recommended for You</button>
      </div>
      <ul className="navbar-items">
        <li>Produce</li>
        <li>Dairy</li>
        <li>Meat</li>
        <li>Fish</li>
        <li>Beverages</li>
        <li>Frozen</li>
        <li>Snacks & Candy</li>
        <li>Pantry</li>
        <li>Deli</li>
        <li>Bakery</li>
        <li>Canned Foods</li>
        <li>Dried Foods & Pasta</li>
      </ul>
    </div>
  );
}
