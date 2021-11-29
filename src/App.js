import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route>
          <Nav></Nav>
          <Switch path="/home">
            <Home></Home>
          </Switch>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
