import { Link } from "react-router-dom";

function Aside() {
  return (
    <div>
      <ul className="stepper stepper-option">
        <li className="stepper-step-option">
          <Link to={"personal-info"}>1</Link>
        </li>
        <li className="stepper-step-option">
          <Link to="plan-selection">2</Link>
        </li>
        <li className="stepper-step-option">
          <Link to="addon-selection">3</Link>
        </li>
        <li className="stepper-step-option">
          <Link to="summary">4</Link>
        </li>
      </ul>
    </div>
  );
}

export default Aside;
