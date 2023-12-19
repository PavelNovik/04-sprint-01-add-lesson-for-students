import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'
import { decksAPI } from './decks-api.ts'
import { createLogger } from 'vite'

export const Decks = () => {

  return (
    <div>
      <h1>Decks 🦝</h1>
      <AddNewDeckForm />
      <DecksList />
    </div>
  )
}
