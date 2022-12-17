import config from '../../tailwind.config.mjs';
import resolveConfig from 'tailwindcss/resolveConfig.js';

export const { screens } = resolveConfig(config).theme!;
