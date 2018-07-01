import { combineReducers } from 'redux'
import {
  SEND_REQUEST,
  REQUEST_FAILED,
  REQUEST_SUCCEEDED,
  GET_POKEMON,
  LIST_POKEMONS,
  RECIEVE_RESPONSE,
  UPDATE_OFFSET,
} from '../actions/actions'

const initialState = {
    response:[],
    pokemon: "",
    pokemons: [],
    offset: 0,
    isRequestRunning: false,
    requestFailed: false,
}


function pokemonStore (
  state = initialState,
  action
) {
  switch (action.type) {
    case UPDATE_OFFSET: 
      return { ...state,
          offset: action.offset,
      }
    case SEND_REQUEST:
      return { ...state,
        isRequestRunning: true,
      }
    case REQUEST_FAILED:
      return { ...state,
        requestFailed: true,
      }
    case REQUEST_SUCCEEDED:
      return { ...state,
        requestFailed: false,
      }
    case RECIEVE_RESPONSE:
      return { ...state,
        response: action.response,
      }
    case LIST_POKEMONS: 
      return { ...state,
        pokemons: ((state.response.length === 0)? [] : state.response[2].map(p => p.name)),
      }
    case GET_POKEMON: {
      return { ...state,
        pokemon: ((state.response.length === 0)? [] : state.response[3]),
      }
    }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  pokemonStore
})

export default rootReducer
