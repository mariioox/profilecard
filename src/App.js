import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="App">
      <ProfileCard
        name="Okosun Jeffery"
        age={22}
        occupation="Frontend Dev"
        motto={["I am the best", "I need to get better", "I believe in myself"]}
      />
    </div>
  );
}

export default App;
