import { writable } from 'svelte/store';

import type { Taggable } from '../models/tag.enum';

const toggle = <T>(items: Set<T>, item: T) => {
  items.has(item) ? items.delete(item) : items.add(item);
  return items;
};

const readStorage = (key: string) => new Set<string>(JSON.parse(localStorage.getItem(key)!));
const writeStorage = (key: string) => (value: Set<string>) =>
  localStorage.setItem(key, JSON.stringify(Array.from(value)));

const createTagStore = (key: string, tags: Set<string> = readStorage(key)) => {
  const { subscribe, set, update } = writable(tags);

  subscribe(writeStorage(key));

  return {
    subscribe,
    key,
    toggle: ({ id }: Taggable) => update(list => toggle(list, id)),
    reset: () => set(tags),
  };
};

export const techStore = createTagStore('tags');
export const projectStore = createTagStore('ids');
