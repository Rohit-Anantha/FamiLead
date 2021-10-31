import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Tasks from './components/Tasks';
import Lists from './components/Lists';
import Events from './components/Events';
import Login from './components/Login';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login></Login>
          </Route>
          <Route path='/app'>
            <div className='actual-app'>
              <div className='nav'>
                <NavBar></NavBar>
              </div>

              <Switch>
                <Route exact path='/app/dashboard'>
                  <div className='content'>
                    <div className='column'>
                      <Tasks></Tasks>
                      <Lists></Lists>
                    </div>
                    <div className='column'>
                      <Events></Events>
                    </div>
                  </div>
                </Route>
                <Route path='/app/chat' />
                <Route path='/app/places' />
              </Switch>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
