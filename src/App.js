import './App.css';
import CounterComponent from './components/views/Counter/Index';
import TodoComponent from './components/views/Todo/Index';
import { Provider } from 'react-redux';
import store from './components/redux/store'
import './components/css/app.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
            <div className="div-nav">
              <nav>
                <span style={{padding:'10px', margin:'5px'}}><Link to="/" style={{textDecoration:'none', color:'white'}}>Counter App</Link></span>
                <span style={{padding:'10px', margin:'5px'}}><Link to="/todo" style={{textDecoration:'none', color:'white'}}>Todo App</Link></span>
              </nav>
            </div>
              <header className="App-header">
                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                      <Route exact path="/">
                        <CounterComponent />
                      </Route>
                      <Route exact path="/todo">
                        <TodoComponent />
                      </Route>
                    </Switch>
              </header>
        </Router>
      </div>
    </Provider>
    
  );
}

export default App;
