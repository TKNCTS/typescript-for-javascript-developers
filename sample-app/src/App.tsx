import React from "react";
import CounterWidhReducer from "./CounterWidhReducer";

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <CounterWidhReducer />
    </div>
  );
};

App.defaultProps = {
  message: "Hello,defaultProps!",
};

export default App;
