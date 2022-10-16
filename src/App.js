import "./App.css";
import React from "react";
import { Search } from "./pages/Search/Search";

function App() {
  return (
    <div className="App">
      <TestComponent />
    </div>
  );
}

export const TestComponent = () => {
  return (
    <div >
      <Search />
    </div>
  );
};

export default App;
