import { withOptions } from 'tailwindcss/plugin'

function getSpacingUtilities(spacing: number) {
  return {
    px: '0.0625rem',
    0: '0rem',
    ...Array(spacing * 4)
      .fill(0)
      .map((_, index) => index + 1)
      .reduce<Record<string, string>>((obj, index) => {
        obj[index / 4] = index / 16 + 'rem'
        return obj
      }, {}),
  }
}

function checkForValidSpacingInput(spacing: number) {
  if (typeof spacing === 'number') return
  throw new Error('The Spacing Plugin expects a `spacing` option passed to it, which is a number.')
}

export default withOptions(
  () => () => {},
  (options: { spacing: number }) => {
    const { spacing } = options
    checkForValidSpacingInput(spacing)
    return {
      theme: {
        spacing: getSpacingUtilities(spacing),
      },
    }
  },
)
