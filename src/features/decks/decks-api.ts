import axios, { AxiosResponse } from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/v1/',
  headers: {
    'x-auth-skip': true,
  },
})

export type Author = {
  id: string;
  name: string;
}

export type Deck = {
  author: Author;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  shots: number;
  cover: string;
  created: string;
  updated: string;
  cardsCount: number;
}

export type Pagination = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
}

export type FetchDecksResponse = {
  items: Deck[];
  pagination: Pagination;
  maxCardsCount: number;
}

export const decksAPI = {
  fetchDecks() {
    return instance.get<FetchDecksResponse>('decks')
  },
  postDecks(params: AddDeckParams) {
    return instance.post<Deck>('decks', params)
  }

}

export type AddDeckParams = {
  name: string
}