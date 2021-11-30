import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import AllProjects from "./Components/AllProjects/AllProjects";
import Blog from "./Components/Blog/Blog";
import ContactMe from "./Components/ContactMe/ContactMe";
import Details1 from "./Components/Details1/Details1";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/contactme">
            <ContactMe></ContactMe>
          </Route>
          <Route exact path="/aboutme">
            <AboutMe></AboutMe>
          </Route>
          <Route exact path="/allprojects">
            <AllProjects></AllProjects>
          </Route>
          <Route exact path="/details1">
            <Details1></Details1>
          </Route>
          <Route exact path="/blog">
            <Blog></Blog>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
