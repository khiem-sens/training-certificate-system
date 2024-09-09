import plugin from 'tailwindcss/plugin'

export default plugin(({ addBase, theme }) => {
  addBase({
    ':root': {
      /* FIXME: bug here */
      '--dialog-width': `clamp(
        343px,
        calc(100dvw - 32px),
        600px
      )`,

      '--max-bound': 'calc(1440rem / 16)',
      '--site-padding': 'calc(24rem / 16)',
      '--content-width': `min(
        calc(100dvw - 2 * var(--site-padding)),
        calc(var(--max-bound) - 2 * var(--site-padding))
      )`,
      '--px': 'calc((100dvw - var(--content-width)) / 2)',

      // '@screen sm': {
      //   '--site-padding': 'calc(48rem / 16)',
      // },
      '@screen s-992': {
        '--site-padding': 'calc(80rem / 16)',
      },
      // '@screen lg': {
      //   '--site-padding': 'calc(96rem / 16)',
      // },
      // '@screen s-1440': {
      //   '--site-padding': 'calc(150rem / 16)',
      // },

      '@media (prefers-color-scheme: dark)': {},
    },
  })

  addBase({
    '*, ::before, ::after': {
      borderColor: theme('colors.neutral.2'),
      wordBreak: 'break-word',
    },

    ':focus, :focus-visible': {
      outline: `0px solid ${theme('colors.red.700')}`,
      outlineOffset: '2px',
      // outlineWidth: '2px',
    },

    html: {
      // color: theme('colors.white'),
      backgroundColor: theme('colors.neutral.light'),
    },

    'a, span': {
      // display: 'inline-block',
    },
  })
})
