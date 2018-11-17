import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Lightning Maps',
  url: 'https://geocodio.github.io/lightning-maps-react/'
})

const req = require.context('../src', true, /\.?story\.js$/)
const loadStories = () => req.keys().forEach((filename) => req(filename))

configure(loadStories, module);
