import ThemedStylesProps from "./styles";
import { RouterProvider } from "react-router-dom";

import { DataSourceProvider } from "./context/DataSourceContext";

import router from "./router";

const App = () => {
  return (
    <ThemedStylesProps>
      <DataSourceProvider>
        <RouterProvider router={router} />
      </DataSourceProvider>
    </ThemedStylesProps>
  );
};

export default App;
