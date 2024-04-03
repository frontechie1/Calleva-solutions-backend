import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import store from "./service/store.js";
import { Provider } from "react-redux";
import { uiTheme } from "./presentation/theme/customUiTheme.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider value={uiTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
