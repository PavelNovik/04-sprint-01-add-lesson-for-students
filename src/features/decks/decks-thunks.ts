import { AddDeckParams, decksAPI } from './decks-api.ts'
import { Dispatch } from 'redux'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksAPI.fetchDecks().then(res => dispatch(setDecksAC(res.data.items)))
}

export const addDecksTC = (params: AddDeckParams) => async (dispatch: Dispatch) => {
  // try {
  //   decksAPI.postDecks(params).then(res => dispatch(addDeckAC(res.data)))
  // } catch (e) {
  //   console.error(e)
  // }

  return  decksAPI.postDecks(params).then(res => dispatch(addDeckAC(res.data)))
}