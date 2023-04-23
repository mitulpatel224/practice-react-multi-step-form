import { useEffect } from "react";

function StepperFooter({ stepperCtx }: any) {
  debugger;
  const { stepper, setStepper } = stepperCtx;
  useEffect(() => {
    console.log(stepper.active);

    return () => {};
  }, [stepper.active]);

  const isLastStep = stepper?.active === 4;
  return <div>StepperFooter</div>;
}

export default StepperFooter;
