import BuilderView from "../views/BuilderView";
import WelcomeView from "../views/WelcomeView";

// paths should be CONSTANTS
export const routes = [
  {
    path: "/",
    element: <WelcomeView />,
  },

  {
    path: "/builder",
    element: <BuilderView />,
  },
];
