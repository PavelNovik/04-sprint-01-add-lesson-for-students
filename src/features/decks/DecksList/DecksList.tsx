import s from './DecksList.module.css'
import { useEffect } from 'react'
// import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
// import { selectDecks } from '../decks-selectors.ts'
// import { fetchDecksTC } from '../decks-thunks.ts'
import { useFetchDecks } from './DeckItem/useFetchDecks.ts'

export const DecksList = () => {
  const {decks} = useFetchDecks()
  return <ul className={s.list}>
    {decks.map((deck)=> {
      return <DeckItem key={deck.id} deck={deck}/>
    })}
  </ul>
}
