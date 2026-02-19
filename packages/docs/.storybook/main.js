import { dirname } from 'path'

import { fileURLToPath } from 'url'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/pages/**/*.mdx', '../src/stories/**/*.stories.tsx'],
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath("@storybook/addon-a11y")
  ],
  framework: getAbsolutePath('@storybook/react-vite'),
  viteFinal: async (config, { configType }) => {
    // Prefer ESM fields and avoid prebundling the local package which may contain CJS code
    config.resolve = config.resolve || {}
    config.resolve.mainFields = ['module', 'browser', 'main']
    config.optimizeDeps = config.optimizeDeps || {}
    config.optimizeDeps.exclude = config.optimizeDeps.exclude || []
    if (!config.optimizeDeps.exclude.includes('@ignite-ui/react')) {
      config.optimizeDeps.exclude.push('@ignite-ui/react')
    }
    return config
  }
}
export default config
