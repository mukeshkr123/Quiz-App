import "./Menu.css";

const Menu = () => {
  return (
    <div className="Menu container">
      <label htmlFor="">Enter your Name</label>
      <input type="text" placeholder="Ex, Mukesh Kumar" />
      <button>Start Quiz</button>
    </div>
  );
};

export default Menu;
