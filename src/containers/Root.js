import { Provider } from 'react-redux'
import ShowPokemons from './ShowPokemons'
import ShowPokemon from './ShowPokemon'

import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom'



const Root = ({ store }) => (
      <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={ShowPokemons} />
              <Route path="/pokemon/:pokemonName" component={ShowPokemon} />
            </Switch>
          </Router>
      </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root