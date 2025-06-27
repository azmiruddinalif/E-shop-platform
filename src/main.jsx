import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import "swiper/css";
import App from "./App.jsx";
import "./index.css";
import { store } from "./service/redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
);
