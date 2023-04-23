import { useState } from "react";
import { Outlet } from "react-router";
import "./App.scss";
import Aside from "./components/Aside";
import StepperFooter from "./components/StepperFooter";

function App() {
  // TODO: STEP 1 - PERSONAL INFO FORM
  // TODO: STEP 2 - PLAN SELECTION
  // TODO: PLAN CARD
  // TODO: MONTHLY SUBSCRIPTION
  // TODO: STEP 3 - ADD-ONS
  // TODO: ADD-ON OPTION
  // TODO: STEP 4 - SUMMARY
  // TODO: THANK YOU NOTE

  // TODO: ASIDE FOR STEPPER
  // TODO: STEPPER OPTION
  // TODO: STEP_FOOTER

  // SHARED
  // TODO: STEP_HEADER

  /** Stepper state */
  const [stepper, setStepper] = useState({
    active: 1,
    data: {
      personalInfo: {},
      selectedPlan: {},
      addons: [],
    },
  });

  return (
    <div className="App container">
      <div className="header">
        <Aside stepperCtx={{ stepper, setStepper }} />
      </div>
      <div className="main">
        <Outlet context={[stepper, setStepper]}></Outlet>
      </div>
      <div className="footer">
        <StepperFooter stepperCtx={{ stepper, setStepper }}></StepperFooter>
      </div>
    </div>
  );
}

export default App;
