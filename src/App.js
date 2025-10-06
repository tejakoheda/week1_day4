function App() {
  const logged = false;

  if (logged) {
    return <h2>Welcome, Teja! </h2>;
  } else {
    return <h2>Please Login First </h2>;
  }
}

export default App;
