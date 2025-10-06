function App() {
  const greetUser=(name)=>{
    alert(`Hello ${name}!`);
  }

  return (
    <div>
      <button onClick={() => greetUser("Teja")}>Greet Me</button>
    </div>
  );
}

export default App;
