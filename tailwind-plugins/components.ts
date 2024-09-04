import plugin from 'tailwindcss/plugin'

export default plugin(({ addComponents }) => {
  addComponents({
    '.hidden-scrollbar::-webkit-scrollbar': {
      display: 'none',
    },
    '.hidden-scrollbar': {
      scrollbarWidth: 'none',
      MsOverflowStyle: 'none',
    },
  })

  addComponents({
    '.webkit-appearance-none': {
      WebkitAppearance: 'none',
    },
  })

  addComponents({
    '.absolute-center': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  })

  addComponents({
    '.break-words': {
      wordBreak: 'break-word',
    },
  })
})
