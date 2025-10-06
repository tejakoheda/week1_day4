const AlertBox = (props) => {
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      {/* props.children displays whatever is written inside <AlertBox>... </AlertBox> */}
      {props.children}

      {/* Button calls function received from parent */}
      <button onClick={props.onAlert}>Show Alert</button>
    </div>
  );
};

export default AlertBox;
