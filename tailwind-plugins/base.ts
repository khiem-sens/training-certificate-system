import plugin from 'tailwindcss/plugin'

export default plugin(({ addBase, theme }) => {
  addBase({
    ':root': {
      // '--max-bound': 'calc(1440rem / 16)',
      // '--site-padding': 'calc(24rem / 16)',
      // '--content-width': `min(
      //   calc(100vw - 2 * var(--site-padding)),
      //   calc(var(--max-bound) - 2 * var(--site-padding))
      // )`,
      // '--px': 'calc((100vw - var(--content-width)) / 2)',
      // '--header-height': 'calc(80rem / 16)',

      // '@screen sm': {
      //   '--site-padding': 'calc(48rem / 16)',
      // },
      // '@screen md': {
      //   '--header-height': 'calc(72rem / 16)',
      // },
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
      // outline: `${theme('spacing[0.5]')} solid ${theme('colors.red.700')}`,
      // outlineOffset: '2px',
      outlineWidth: '0',
    },

    html: {
      // color: theme('colors.white'),
      backgroundColor: theme('colors.neutral.4'),
    },

    'a, span': {
      // display: 'inline-block',
    },
    '[type="search"]::-webkit-search-decoration': { display: 'none' },
    '[type="search"]::-webkit-search-cancel-button': { display: 'none' },
    '[type="search"]::-webkit-search-results-button': { display: 'none' },
    '[type="search"]::-webkit-search-results-decoration': { display: 'none' },
  })
})
