import { createStitches, defaultThemeMap } from '@stitches/react'

import type * as Stitches from '@stitches/react'

const themeVariables = {
  colors: {
    pri1: '#fafdfe',
    pri2: '#f2fcfd',
    pri3: '#e7f9fb',
    pri4: '#d8f3f6',
    pri5: '#c4eaef',
    pri6: '#aadee6',
    pri7: '#84cdda',
    pri8: '#3db9cf',
    pri9: '#05a2c2',
    pri10: '#0894b3',
    pri11: '#0c7792',
    pri12: '#04313c',
  },
}

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: themeVariables,
})

export type CSS = Stitches.CSS<typeof config>

export const darkTheme = createTheme('dark-theme', {
  colors: {
    pri1: '#151718',
    pri2: '#1a1d1e',
    pri3: '#202425',
    pri4: '#26292b',
    pri5: '#2b2f31',
    pri6: '#313538',
    pri7: '#3a3f42',
    pri8: '#4c5155',
    pri9: '#697177',
    pri10: '#787f85',
    pri11: '#9ba1a6',
    pri12: '#ecedee',
  },
});

export const lightTheme = createTheme('light-theme', {
  colors: {
    pri1: '#fffcfc',
    pri2: '#fff8f7',
    pri3: '#fff0ee',
    pri4: '#ffe6e2',
    pri5: '#fdd8d3',
    pri6: '#fac7be',
    pri7: '#f3b0a2',
    pri8: '#ea9280',
    pri9: '#e54d2e',
    pri10: '#db4324',
    pri11: '#ca3214',
    pri12: '#341711',
  }
});