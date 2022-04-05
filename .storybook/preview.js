import { darkTheme, lightTheme } from './../stitches.config';

export const parameters = {
  multipleThemesStitches: {
        values: [
          { 
            name: 'Light', 
            theme: lightTheme
          },
          { 
            name: 'Dark', 
            theme: darkTheme
          }
        ]
    },
};