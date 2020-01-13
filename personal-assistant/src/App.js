import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainApp from './MainApp'
import Weather from './Weather'

const App = () => (
  <div>
    <Switch>
      <Route path="/Weather">
        <Weather />
      </Route>
      <Route path="/">
        <MainApp />
      </Route>
    </Switch>
  </div>
)

export default App
