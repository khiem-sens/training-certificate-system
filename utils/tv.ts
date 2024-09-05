import { createTV } from 'tailwind-variants'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)

const tv = createTV({
  twMergeConfig: {
    classGroups: {
      'font-size': [{ text: Object.keys(fullConfig.theme.fontSize) }],
      shadow: [{ shadow: Object.keys(fullConfig.theme.boxShadow) }],
    },
  },
})

export default tv
