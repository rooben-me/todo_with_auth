import React from "react";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import "@styles/global.css";
import { Provider } from "react-redux";
import { store, persistor } from "@redux/store/app.store";
import { PersistGate } from "redux-persist/integration/react";

import { Spin } from "antd";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Spin size="large" tip="Loading..." />}
        persistor={persistor}
      >
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
