import React from "react";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import "@styles/global.css";
import { Provider } from "react-redux";
import { store, persistor } from "@redux/store/app.store";
import { PersistGate } from "redux-persist/integration/react";
import { Store } from "redux";
import { Persistor } from "redux-persist";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
