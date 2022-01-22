import React, { Suspense } from "react";
import { Connector } from "react-mqtt-client";
import "./App.css";
import Loader from "./components/Loader";

const CustomMap = React.lazy(() => import("./components/CustomMap"));

function App() {
  const host = "broker.hivemq.com";
  const port = "1883";
  const connectUrl = `mqtt://${host}:${port}`;

  return (
    <Connector
      mqttProps={{
        url: connectUrl,
      }}
    >
      <div className="App">
        <header className="App-header">
          <Suspense fallback={<Loader />}>
            <CustomMap />
          </Suspense>
        </header>
      </div>
    </Connector>
  );
}

export default App;
