import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET_DECKS': {
      return { ...state, decks: action.decks}
    }
    case 'DECKS/ADD_DECKS': {
      return {
        ...state,
        decks: [action.deck, ...state.decks]
      }
    }
    default:
      return state
  }
}

type DecksActions = SetDecksACType | AddDeckACType



type SetDecksACType = ReturnType<typeof setDecksAC>
export const setDecksAC = (decks: Deck[]) => {
  return {
    type: 'DECKS/SET_DECKS',
    decks
  } as const
}

type AddDeckACType = ReturnType<typeof addDeckAC>
export const  addDeckAC = (deck: Deck)=>{
  return {
    type: 'DECKS/ADD_DECKS',
    deck
  } as const
}