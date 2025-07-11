import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./stores/Store";
import router from "./routers/Router";
import GlobalStyle from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </Provider>
  )
}

export default App;