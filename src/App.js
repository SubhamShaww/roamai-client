import React, { Suspense } from "react";
import { Connector } from "react-mqtt-client";
import "./App.css";
import Loader from "./components/Loader";

const CustomMap = React.lazy(() => import("./components/CustomMap"));

function App(props) {
  const host = process.env.REACT_APP_HOST;
  const port = process.env.REACT_APP_PORT;
  const connectUrl = `ws://${host}:${port}/mqtt`;

  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<Loader />}>
          <Connector mqttProps={connectUrl}>
            <CustomMap />
          </Connector>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
