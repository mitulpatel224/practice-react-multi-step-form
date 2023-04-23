import { useState } from "react";
import { Outlet } from "react-router";
import "./App.scss";

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
  const [stepper, setStepper] = useState({ active: 1, data: {} });

  return (
    <div className="App">
      <Outlet context={[stepper, setStepper]}></Outlet>
    </div>
  );
}

export default App;
