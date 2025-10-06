import { useState } from "react";

function ToggleText() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? <p>Hello</p> : <p>Text Hidden</p>}
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
}

export default ToggleText;

