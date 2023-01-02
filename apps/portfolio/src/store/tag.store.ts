import { derived } from 'svelte/store';

import { bundlers, frameworks, testRunners, tools } from '../constants/tech.const';
import type { Taggable } from '../models/tag.enum';

import { techStore } from './id.store';

const taggables: Taggable[] = [...bundlers, ...frameworks, ...testRunners, ...tools];

export const tagStore = derived(
  techStore,
  store => new Set(taggables.filter(({ id }) => store.has(id)).flatMap(({ tags }) => tags))
);
