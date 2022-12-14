import "./App.css";
import countries from "world-countries";
import CountryInfo from "./components/CountryInfo.js";

function App() {
  countries.sort((a, b) => {
    return b.area - a.area;
  });

  countries = countries.filter((country) => {
    return country.name.common !== "Antarctica";
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="left_column">
          {countries.slice(0, 5).map((c) => {
            return <CountryInfo data={c} key={c.ccn3} details={true} />;
          })}
        </div>
        <div className="right_column">
          {countries.slice(6, 17).map((c) => {
            return <CountryInfo data={c} key={c.ccn3} details={false} />;
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
