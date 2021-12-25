import MonthYear from "./month-year";
import WeekDate from "./week-date";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <section className="glass">
          <MonthYear />
          <WeekDate />
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

export default App;
