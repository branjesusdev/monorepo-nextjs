/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./entry-point/**/*.{js,ts,jsx,tsx,mdx}",
  "./features/**/*.{js,ts,jsx,tsx,mdx}",
  "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}", 
]

module.exports = {
  content: [
    ...content,
  ],
  purge: {
    enabled: true,
    content: [
      ...content
    ],
  },
  theme: {
    colors: {
      ...colors,
      primary: "var(--ui-primary)",
      secondary: "var(--ui-secondary)",
    },
    fontFamily: {
      sans: ['var(--font-family)', 'ui-sans-serif', 'system-ui']
    },
  },
  plugins: [
    require('@midudev/tailwind-animations'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('daisyui'),
  ]
}