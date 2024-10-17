import { Provider as StoreProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from '@Router/index';
import store from '@Store/index';

function App() {
  return (
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}

export default App;
