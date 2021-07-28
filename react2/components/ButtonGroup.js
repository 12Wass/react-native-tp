import React, { useState } from "react";
import Button from "./lib/Button";

function ButtonGroup() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        title={`${visible ? "Hide" : "Display"} Buttons`}
        onClick={() => setVisible(!visible)}
      />
      {visible && (
        <>
          <Button title="Hello 1" onClick={() => console.log("foo")} />
          <Button type="submit" title="Hello 2" />
          <Button
            title="Hello 3"
            variant="rounded"
            onClick={() => alert("hello")}
          />
          <Button role="navigation" title="Hello 5" />
          <Button title="H" variant="icon" size={50} />
        </>
      )}
    </>
  );
}

export default ButtonGroup;
