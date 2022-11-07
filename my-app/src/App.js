import React from "react";

function App({data, onClickHandler}) {
  console.log(onClickHandler);
  return (
    <h1>
        Hello React App
        props:: {data}
        <button onClick={() => onClickHandler("data from react remote app")}>Click Me</button>
    </h1>
  );
}

export default App;
