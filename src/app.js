import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'

import './style.scss'

import Home from './components/home'
import SearchesNew from './components/searches/searchesNew'
import Randomizer from './components/searches/randomizer'
import Nav from './components/common/nav'
import Footer from './components/common/footer'

const App = () => {
  return (
    <Browser>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchesNew} />
          <Route path="/randomizer" component={Randomizer} />
        </Switch>
        <Footer />
      </div>
    </Browser>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
