import Form from "./components/Form";
import ShowList from "./components/ShowList";
import "./style.css";

function App() {
  return (
    <div className="app">
      <h1>Employee DB</h1>
      <Form />
      <ShowList />
    </div>
  );
}

export default App;
