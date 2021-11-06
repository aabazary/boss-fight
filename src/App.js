import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import BossBattle from "./components/pages/BossBattle"
import MinionBattle from "./components/pages/MinionBattle"
import Gathering from "./components/pages/Gathering"
import Puzzle from "./components/pages/Puzzle"
import Store from "./components/pages/Store"
import Fighting from "./components/pages/Fighting"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/MinionBattle' component={MinionBattle} />
        <Route path='/BossBattle' component={BossBattle} /> */}
        <Route path='/Fighting' component={Fighting} />
        <Route path='/Gathering' component={Gathering} />
        <Route path='/Puzzle' component={Puzzle} />
        <Route path='/Store' component={Store} />
      </Switch>
    </Router>
  );
}

export default App;