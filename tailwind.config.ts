import type { Config } from 'tailwindcss'
import base from './tailwind-plugins/base'
import components from './tailwind-plugins/components'
import spacing from './tailwind-plugins/spacing'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },
      fontWeight: {
        bold: '700',
        regular: '400',
      },
      fontSize: {
        h1: [
          '2rem',
          {
            lineHeight: '2.75rem',
            letterSpacing: '0em',
            fontWeight: '700',
          },
        ],
        h2: [
          '1.125rem',
          {
            lineHeight: '1.625rem',
            letterSpacing: '0em',
            fontWeight: '700',
          },
        ],
        'body-md': [
          '1rem',
          {
            lineHeight: '1.375rem',
            letterSpacing: '0em',
            fontWeight: '400',
          },
        ],
        'body-md-bold': [
          '1rem',
          {
            lineHeight: '1.375rem',
            letterSpacing: '0em',
            fontWeight: '700',
          },
        ],
        'body-sm': [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            letterSpacing: '0em',
            fontWeight: '400',
          },
        ],
        'body-sm-bold': [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            letterSpacing: '0em',
            fontWeight: '700',
          },
        ],
      },
      colors: {
        primary: {
          1: '#1E52A6',
          2: '#346FE0',
          3: '#B3C5E3',
        },
        neutral: {
          1: '#333333',
          2: '#DDDDDD',
          3: '#F2F4F8',
          4: '#FFFFFF',
        },
        semantic: {
          red: {
            DEFAULT: '#D92A00',
            2: '#ED3421',
          },
          green: {
            DEFAULT: '#22C55E',
            2: '#DDFDE7',
          },
        },
      },
      boxShadow: {
        button: '0px 1px 2px 0px #1018280D',
        'focus-button': `
          0px 1px 2px 0px #0000001A,
          0px 0px 0px 3px #94A3B814
        `,
        'focus-input': '0px 0px 0px 3px #94A3B814',
        'border-b-neutral-2': 'inset 0px -1px 0px 0px theme(colors.neutral.2)',
      },
      dropShadow: {
        'focus-icon': '0px 0px 3px #94A3B8',
      },
    },
  },
  plugins: [base, components],
}
export default config
