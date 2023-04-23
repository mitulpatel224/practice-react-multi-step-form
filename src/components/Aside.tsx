import { Link } from "react-router-dom";

function Aside({ stepperCtx }: any) {
  const handleStepClick = (event: Event, step: number) => {
    event.preventDefault();
    stepperCtx.setStepper({ active: step });
  };
  return (
    <div>
      <ul className="stepper stepper-option">
        <li className="stepper-step-option">
          <Link
            to={"personal-info"}
            onClick={(event: any) => handleStepClick(event, 1)}
          >
            1
          </Link>
        </li>
        <li className="stepper-step-option">
          <Link
            to={"plan-selection"}
            onClick={(event: any) => handleStepClick(event, 2)}
          >
            2
          </Link>
        </li>
        <li className="stepper-step-option">
          <Link
            to={"addon-selection"}
            onClick={(event: any) => handleStepClick(event, 3)}
          >
            3
          </Link>
        </li>
        <li className="stepper-step-option">
          <Link
            to={"summary"}
            onClick={(event: any) => handleStepClick(event, 4)}
          >
            4
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Aside;
