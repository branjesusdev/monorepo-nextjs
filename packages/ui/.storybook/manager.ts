import { addons } from '@storybook/manager-api';
import monorepoTheme from './monorepoTheme';
 
addons.setConfig({
  theme: monorepoTheme,
});