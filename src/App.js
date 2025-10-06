import AlertBox from "./prop/Firstcomp";



function App() {
  // Function defined in parent
  const showMessage = () => {
    alert("Hello Teja! You clicked the button.");
  };

  return (
    <div>
      {/* Sending function as prop (onAlert) */}
      {/* Sending content as children */}
      <AlertBox onAlert={showMessage}>
        <h3>Click the button to see an alert message!</h3>
      </AlertBox>
    </div>
  );
}

export default App;
