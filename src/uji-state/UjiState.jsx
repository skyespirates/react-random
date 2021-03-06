import React, { useState, useEffect } from "react";

function UjiState() {
  const [data, setData] = useState(true);
  console.log("re-rendered");
  useEffect(() => {
    console.log("test");
  }, [data]);
  return (
    <div>
      <h1>hello world</h1>
      <button onClick={() => setData(!data)}>click</button>
      <button onClick={() => setData(data)}>click.me</button>
    </div>
  );
}

export default UjiState;
