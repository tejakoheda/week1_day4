function App() {
  const showMsg = () => {
    console.log(" clicked!");
  };

  return (
      <button onClick={showMsg}>Click</button>
  );
}

export default App;
