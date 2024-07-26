import Dexie, { type EntityTable } from 'dexie';
import { Deck } from './schema';

export const db = new Dexie('decks') as Dexie & {
  decks: EntityTable<Deck, 'id'>;
};

db.version(1).stores({
  decks: 'id, cards, params',
});
