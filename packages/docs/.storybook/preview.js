/** @type { import('@storybook/react-vite').Preview } */

import { themes } from 'storybook/theming'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
}

export default preview
