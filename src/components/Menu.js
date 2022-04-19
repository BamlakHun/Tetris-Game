import "./Menu.css";

const Menu = ({ onClick }) => (
  <div className="Menu">
    <button className="Button" onClick={onClick}>
      PlayTetris
    </button>
  </div>
);

export default Menu;
