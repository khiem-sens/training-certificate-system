import config from '@/tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const fullConfig = resolveConfig(config)

const BREAKPOINTS = Object.entries(fullConfig.theme.screens).reduce(
  (obj, [key, value]) => ({
    ...obj,
    [key]: parseInt(value.replace('px', '')),
  }),
  // TODO: fix typescript
  {} as Record<keyof typeof fullConfig.theme.screens, number>,
)

export default BREAKPOINTS
