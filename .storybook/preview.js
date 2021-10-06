import { lightTheme, darkTheme } from './../stitches.config';

export const parameters = {
    myAddonParameter: {
        values: [
          { 
            name: 'Light', 
            theme: {
              className: lightTheme.className,
              selector: lightTheme.selector,
            }
          },
          { 
            name: 'Dark', 
            theme: {
              className: darkTheme.className,
              selector: darkTheme.selector,
            }
          }
        ]
    },
};