import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "src/pages/Home/Home";
import Search from "./pages/Search/Search";
import Header from "src/components/Header/Header";
import MoveDetail from "./pages/MoveDetail/MoveDetail";
import PokemonDetail from "src/pages/PokemonDetail/PokemonDetail";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home/:index">
          <PokemonDetail />
        </Route>
        <Route path="/move/:name">
          <MoveDetail />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
