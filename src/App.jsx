import store from "./config/store/index";
import { Provider as StoreProvider } from "react-redux";
import router from "./config/router/index";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <StoreProvider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </StoreProvider>
  );
}

export default App;
