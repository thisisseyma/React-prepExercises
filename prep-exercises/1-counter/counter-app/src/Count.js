import React from "react";

function Count({ count, feedback }) {
  return (
    <div>
      <p>Count: {count}</p>
      <p>{feedback}</p>
    </div>
  );
}

export default Count;
