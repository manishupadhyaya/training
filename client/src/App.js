import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import RecentlyAddedContainer from './components/RecentlyAddedContainer'
import ShowAllContainer from './components/ShowAllContainer'

const App = () =>{
  return(
  <Provider store={store}>
    <Router>
      <Switch>
          <Route exact path="/home" component={Home}/>
      </Switch>
      <Switch>
          <Route exact path="/recentlyAdded" component={RecentlyAddedContainer}/>
      </Switch>
      <Switch>
          <Route exact path="/showAll" component={ShowAllContainer}/>
      </Switch>
    </Router>
  </Provider>
  )
}

export default App;
