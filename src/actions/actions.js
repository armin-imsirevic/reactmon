//import fetch from 'cross-fetch'

export const SEND_REQUEST = 'SEND_REQUEST'
export const RECIEVE_RESPONSE = 'RECIEVE_RESPONSE'
export const UPDATE_OFFSET = 'UPDATE_OFFSET'
export const LIST_POKEMONS = 'LIST_POKEMONS'
export const GET_POKEMON = 'GET_POKEMON'
export const REQUEST_FAILED = 'REQUEST_FAILED'
export const REQUEST_SUCCEEDED = 'REQUEST_SUCCEEDED'
export const URL_LIST_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset='
export const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/'


export function updateOffset(offset) {
  return {
    type: UPDATE_OFFSET,
    offset: offset,
  }
}

function runRequest() {
  return {
    type: SEND_REQUEST,
    isRequestRunning: true,
  }
}

function notifiyRequestFailed(error) {
  return {
    type: REQUEST_FAILED,
    requestFailed: true,
    error: error
  }
}

function notifiyRequestSucceeded() {
  return {
    type: REQUEST_SUCCEEDED,
    requestFailed: false,
  }
}

function recieveResponse(response) {
  return {
    type: RECIEVE_RESPONSE,
    response: response,
  }
}

function listPokemons() {
  return {
    type: LIST_POKEMONS
  }
}

function getPokemon() {
  return {
    type: GET_POKEMON
  }
}

export function fetchPokemons(offset = 0) {
  console.log(offset)
  return dispatch => {
    dispatch(sendRequest(URL_LIST_POKEMONS + offset))
    .then(() =>  dispatch(listPokemons()))
  }
}

export function fetchPokemon(pokemonName) {
  return dispatch => {
    dispatch(sendRequest(URL_POKEMON + pokemonName))
    .then(() =>  dispatch(getPokemon()))
  }
}

function sendRequest(URL) {
  return dispatch => {
    dispatch(runRequest())
    return fetch(URL)
      .then(response => response.json())
      .then(json =>  dispatch(recieveResponse(Object.values(json))))
      .then(_ =>  dispatch(notifiyRequestSucceeded()))
      .catch(err => dispatch(notifiyRequestFailed(err.toString)))
  }
}
