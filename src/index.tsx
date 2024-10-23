import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { store } from "./store/store";
import App from "./App";
import ModalContextProvider from "./context/modal-context";
import MessageContextProvider from "./context/message-context";

import "./index.css";
import "flowbite";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

let CLIENT_ID;

if (process.env.NODE_ENV === "development") {
  CLIENT_ID = process.env.REACT_APP_DEV_GOOGLE_OAUTH_CLIENT_ID;
} else {
  CLIENT_ID = process.env.REACT_APP_PROD_GOOGLE_OAUTH_CLIENT_ID;
}
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MessageContextProvider>
        <ModalContextProvider>
          <GoogleOAuthProvider clientId={CLIENT_ID || ""}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </GoogleOAuthProvider>
        </ModalContextProvider>
      </MessageContextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
