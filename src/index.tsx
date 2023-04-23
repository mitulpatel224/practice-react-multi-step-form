import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
/* ---------------------------------------------------------------------- */
import App from "./App";
import PersonalInfo from "./components/PersonalInfo";
import "./index.css";
/* ---------------------------------------------------------------------- */
import AddOns from "./components/AddOns";
import PlanSelection from "./components/PlanSelection";
import Summary from "./components/Summary";
import ThankYouNote from "./components/ThankYouNote";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "personal-info",
        element: <PersonalInfo />,
      },
      {
        path: "plan-selection",
        element: <PlanSelection />,
      },
      {
        path: "addon-selection",
        element: <AddOns />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
      {
        path: "greet",
        element: <ThankYouNote />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
