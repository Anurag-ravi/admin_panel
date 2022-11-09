import Login from './pages/login';
import Register from './pages/register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
