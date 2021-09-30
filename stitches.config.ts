import { createStitches, defaultThemeMap } from '@stitches/react'
import type * as Stitches from '@stitches/react'

const themeVariables = {
  colors: {
    none: 'transparent',
    pri: 'rgba(64,121,162,1)', // primary (ali)
    pri_75: 'rgba(64,121,162,0.75)', // pirmary with opacity 0.75
    pri_50: 'rgba(64,121,162,0.5)', // pirmary with opacity 0.50
    pri_25: 'rgba(64,121,162,0.25)', // pirmary with opacity 0.25
    pri_L: 'rgba(99, 164, 195, 1)', // light version
    pri_D: 'rgba(53, 101, 136, 1)', // dark version
    sec: 'rgba(39, 81, 101, 1)', // secondary (ben)
    sec_75: 'rgba(39, 81, 101, 0.75)',
    sec_50: 'rgba(39, 81, 101, 0.5)',
    sec_25: 'rgba(39, 81, 101, 0.25)',
    sec_L: 'rgba(63, 132, 165, 1)',
    sec_D: 'rgba(32, 68, 84, 1)',
    ter: 'rgba(23, 141, 179, 1)', // tertiary (cal)
    ter_L: 'rgba(47, 184, 228, 1)', // light version
    ter_D: 'rgba(19, 118, 150, 1)', // dark version
    acc: 'rgba(214, 57, 0, 1)', // accent (dan) #d63900
    acc_L: 'rgba(249, 66, 00, 1)', // light version
    acc_D: 'rgba(179, 47, 0, 1)', // dark version
    ter_75: 'rgba(23, 141, 179, 0.75)',
    ter_50: 'rgba(23, 141, 179, 0.5)',
    ter_25: 'rgba(23, 141, 179, 0.25)',
    acc_75: 'rgba(214, 57, 0, 0.75)',
    acc_50: 'rgba(214, 57, 0, 0.50)',
    acc_25: 'rgba(214, 57, 0, 0.25)',
    lin: 'rgba(74, 180, 249, 1)', // link (han)
    lin_75: 'rgba(74, 180, 249, 0.75)',
    lin_50: 'rgba(74, 180, 249, 0.50)',
    lin_25: 'rgba(74, 180, 249, 0.25)',
    lin_L: 'rgba(102, 192, 249, 1)',
    lin_D: 'rgba(23, 159, 247, 1)',
    ale: 'rgba(195, 111, 123, 1)', // alerts (ivy)
    ale_75: 'rgba(195, 111, 123, 0.75)',
    ale_50: 'rgba(195, 111, 123, 0.50)',
    ale_25: 'rgba(195, 111, 123, 0.25)',
    ale_L: 'rgba(204, 134, 144, 1)',
    ale_D: 'rgba(180, 76, 91, 1)',
    suc: 'rgba(87, 143, 131)', // success (jim)
    suc_75: 'rgba(87, 143, 130.75)',
    suc_50: 'rgba(87, 143, 130.50)',
    suc_25: 'rgba(87, 143, 130.25)',
    suc_L: 'rgba(108, 166, 153)',
    suc_D: 'rgba(73, 120, 109)',
    gs1: 'rgba(255,255,255, 1)', // (sue)
    gs1_75: 'rgba(255,255,255, 0.75)',
    gs1_50: 'rgba(255,255,255, 0.50)',
    gs1_25: 'rgba(255,255,255, 0.25)',
    gs2: 'rgba(219,219,219, 1)', // (roy)
    gs2_75: 'rgba(219,219,219, 0.75)',
    gs2_50: 'rgba(219,219,219, 0.50)',
    gs2_25: 'rgba(219,219,219, 0.25)',
    gs3: 'rgba(140,140,140, 1)', // (qui)
    gs3_75: 'rgba(140,140,140, 0.75)',
    gs3_50: 'rgba(140,140,140, 0.50)',
    gs3_25: 'rgba(140,140,140, 0.25)',
    gs4: 'rgba(70,70,70, 1)', // (pam)
    gs4_75: 'rgba(70,70,70, 0.75)',
    gs4_50: 'rgba(70,70,70, 0.50)',
    gs4_25: 'rgba(70,70,70, 0.25)',
    gs5: 'rgba(45,45,45, 1)', // (ota)
    gs5_75: 'rgba(45,45,45, 0.75)',
    gs5_50: 'rgba(45,45,45, 0.50)',
    gs5_25: 'rgba(45,45,45, 0.25)',
    gs6: 'rgba(0,0,0, 1)', // (nan)
    gs6_75: 'rgba(0,0,0, 0.75)', // (nan)
    gs6_50: 'rgba(0,0,0, 0.50)', // (nan)
    gs6_25: 'rgba(0,0,0, 0.25)', // (nan)
    gs7: 'rgba(79,79,79,1)',
    gs7_L: 'rgba(123,123,123,1)',
    gs7_D: 'rgba(167, 167, 167,1)',
    gs7_50: 'rgba(167, 167, 167, 0.5)',
    gs8: 'rgba(53,101,136,1)',
    gs8_L: 'rgba(64,121,162,1)',
    gs8_D: 'rgba(53,101,136,1)',
    gs9: 'rgba(211, 211, 211,1)',
    gs9_50: 'rgba(211, 211, 211, 0.5)',
    btnPri: '$gs1', // button primary color
    btnPriBg: '$acc', // button primary background color
    btnPriBg_L: '$acc_L', // light version
    btnPriBg_D: '$acc_D', // dark version
    bntPriBo: '$gs6', // button primary border color
    btnSec: '$gs1',
    btnSecBg: '$gs7',
    btnSecBg_L: '$gs7_L',
    btnSecBg_D: '$gs7_D',
    btnSecBo: '$gs3',
    btnTer: '$gs8',
    btnTer_H: '$gs1',
    btnTerBg: '$gs1',
    btnTerBg_L: '$gs8_L',
    btnTerBg_D: '$gs8_D',
    btnTerBo: '$gs3',
  },
  fonts: {
    h1: '"Work Sans", sans-serif',
    h2: '"Work Sans", sans-serif',
    h3: '"Work Sans", sans-serif',
    h4: '"Work Sans", sans-serif',
    h5: '"Work Sans", sans-serif',
    h6: '"Work Sans", sans-serif',
    subtitle1: '"Work Sans", sans-serif',
    subtitle2: '"Work Sans", sans-serif',
    body1: '"Work Sans", sans-serif',
    body2: '"Work Sans", sans-serif',
    button: '"Work Sans", sans-serif',
    caption: '"Work Sans", sans-serif',
    overline: '"Work Sans", sans-serif',
    blockquote: '"Work Sans", sans-serif',
  },
  fontWeights: {
    h1: '400',
    h2: '400',
    h3: '600',
    h4: '400',
    h5: '600',
    h6: '500',
    subtitle1: '400',
    subtitle2: '400',
    body1: '400',
    body2: '400',
    button: '400',
    caption: '400',
    overline: '400',
    blockquote: '400',
  },
  fontStyles: {
    h1: 'normal',
    h2: 'normal',
    h3: 'normal',
    h4: 'normal',
    h5: 'normal',
    h6: 'normal',
    subtitle1: 'normal',
    subtitle2: 'normal',
    body1: 'normal',
    body2: 'normal',
    button: 'normal',
    caption: 'normal',
    overline: 'normal',
    blockquote: 'normal',
  },
  fontCases: {
    h1: 'none',
    h2: 'none',
    h3: 'none',
    h4: 'none',
    h5: 'none',
    h6: 'uppercase',
    subtitle1: 'none',
    subtitle2: 'none',
    body1: 'none',
    body2: 'none',
    button: 'capitalize',
    caption: 'none',
    overline: 'uppercase',
    blockquote: 'none',
  },
  fontSizes: {
    // 1rem = 10px
    h1: '5rem',
    h2: '3.8rem',
    h3: '3.3rem',
    h4: '2.6rem',
    h5: '2.2rem',
    h6: '2.0rem',
    subtitle1: '2.4rem',
    subtitle2: '1.4rem',
    body1: '1.7rem',
    body2: '1.5rem',
    button: '1.6rem',
    caption: '1.2rem',
    overline: '1.3rem',
    blockquote: '1.7rem',
  },
  spacesAfter: {
    h1: '3.9rem',
    h2: '3rem',
    h3: '2.3rem',
    h4: '1.9rem',
    h5: '1.5rem',
    h6: '1.4rem',
    subtitle1: '1.7rem',
    subtitle2: '1rem',
    body1: '1.3rem',
    body2: '1.1rem',
    button: '0rem',
    caption: '0.8rem',
    overline: '0.9rem',
    blockquote: '2.2rem',
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    13: '52px',
    14: '56px',
    15: '60px',
    16: '64px',
    17: '68px',
    18: '72px',
    19: '76px',
    20: '80px',
  },
  lineHeights: {
    h1: '1.1em',
    h2: '1.2em',
    h3: '1.4em',
    h4: '1.2em',
    h5: '1.4em',
    h6: '1.4em',
    subtitle1: '1.4em',
    subtitle2: '1.4em',
    body1: '1.6em',
    body2: '1.5em',
    button: '1.5em',
    caption: '1.4em',
    overline: '1.4em',
    blockquote: '1.4em',
  },
  letterSpacings: {
    h1: '0em',
    h2: '0em',
    h3: '0em',
    h4: '0em',
    h5: '0em',
    h6: '0.03em',
    subtitle1: '0em',
    subtitle2: '0em',
    body1: '0em',
    body2: '0em',
    button: '0em',
    caption: '0em',
    overline: '0.06em',
    blockquote: '0em',
  },
  space: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    13: '52px',
    14: '56px',
    15: '60px',
    16: '64px',
    17: '68px',
    18: '72px',
    19: '76px',
    20: '80px',
  },
  sizes: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    13: '52px',
    14: '56px',
    15: '60px',
    16: '64px',
    17: '68px',
    18: '72px',
    19: '76px',
    20: '80px',
  },
  borderWidths: {
    btnPri: '0px',
    btnSec: '0px',
    btnTer: '1px',
  },
  borderStyles: {
    btnPri: 'solid',
    btnSec: 'solid',
    btnTer: 'solid',
    btnTer_H: 'none',
  },
  radii: {
    0: '0px',
    1: '1px',
    2: '2px',
    3: '4px',
    4: '8px',
    5: '16px',
    6: '32px',
    round: '50%',
    pill: '9999px',
    btnPriTL: '0px',
    btnPriTR: '0px',
    btnPriBL: '0px',
    btnPriBR: '0px',
    btnSecTL: '0px',
    btnSecTR: '0px',
    btnSecBL: '0px',
    btnSecBR: '0px',
    btnTerTL: '0px',
    btnTerTR: '0px',
    btnTerBL: '0px',
    btnTerBR: '0px',
    inputTL: '10px',
    inputTR: '10px',
    inputBL: '10px',
    inputBR: '10px',
  },
  shadows: {
    gs6: 'rgba(0,0,0, 1)', // (nan)
  },
  transitions: {
    slow: '500ms',
    normal: '300ms',
    fast: '100ms',
  },
  zIndices: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    max: '999',
  },
}

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  prefix: 'sho-',
  themeMap: {
    ...defaultThemeMap,
    textTransform: 'fontCases',
    fontStyle: 'fontStyles',
    marginBottom: 'spacesAfter',
  },
  theme: themeVariables,
  media: {
    // why media queries expressed in em https://zellwk.com/blog/media-query-units/
    bp1: '(min-width: 37.5em)', //600px
    bp2: '(min-width: 56.5625em)', // 905px
    bp3: '(min-width: 77.5em)', // 1240px
    bp4: '(min-width: 87.5em)', // 1400px
  },
  utils: {
    textStyle: (fontCase: Stitches.ScaleValue<'fontCases'>) => ({
      fontFamily: fontCase,
      fontWeight: fontCase,
      fontStyle: fontCase,
      textTransform: fontCase,
      fontSize: fontCase,
      lineHeight: fontCase,
      letterSpacing: fontCase,
    }),
    p: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.ScaleValue<'space'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.ScaleValue<'space'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.ScaleValue<'space'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.ScaleValue<'space'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
})

export type CSS = Stitches.CSS<typeof config>

export const globalStyles = (mediaArray: any) =>
  globalCss({
    '@font-face': mediaArray,
    ':root': {
      fontSize: '53.125%', // 0.85% 1rem at 10px
      '@bp1': {
        fontSize: '62.5%', // 1rem = 10px
      },
    },
    '*': { margin: 0, padding: 0 },
    body: {
      webkitFontSmooting: 'antialised',
      mosOsxFontSmoothing: 'grayscale',
      counterReset: 'page',
      backgroundColor: '$gs2',
    },
  })


export const darkTheme = createTheme('dark-theme', {
  colors: {
    none: 'transparent',
    pri: 'red', // primary (ali)
    pri_75: 'rgba(65,164,141,0.75)', // pirmary with opacity 0.75
    pri_50: 'rgba(65,164,141,0.5)', // pirmary with opacity 0.50
    pri_25: 'rgba(65,164,141,0.25)', // pirmary with opacity 0.25
    pri_L: 'rgba(157, 195, 100, 1)', // light version
    pri_D: 'rgba(53, 101, 136, 1)', // dark version
    sec: 'rgba(39, 81, 101, 1)', // secondary (ben)
  }
});

export const lightTheme = createTheme('light-theme', {
  colors: {
    none: 'transparent',
    pri: 'green', // primary (ali)
    pri_75: 'rgba(65,164,141,0.75)', // pirmary with opacity 0.75
    pri_50: 'rgba(65,164,141,0.5)', // pirmary with opacity 0.50
    pri_25: 'rgba(65,164,141,0.25)', // pirmary with opacity 0.25
    pri_L: 'rgba(157, 195, 100, 1)', // light version
    pri_D: 'rgba(53, 101, 136, 1)', // dark version
    sec: 'rgba(39, 81, 101, 1)', // secondary (ben)
  }
});