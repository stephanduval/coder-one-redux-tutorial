import './App.css';
import { HomePage } from './containers/HomePage';
import { UserPage } from './containers/UserPage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {
  return (
    <Router >
      <div className="App">
        <Switch>  {/* changes which page renders depending on the link*/}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/:userID" component={UserPage} />  {/* after the ':' come the parameters so we need something to come after the : to get the users page*/}
          <Route>404 Not Found!</Route> {/* rendering a 404 error*/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
