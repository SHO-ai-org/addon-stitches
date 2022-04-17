# Stitches Theme Selector

A storybook addon that allows your users to change the theme inside the preview.

![theme-selector](https://user-images.githubusercontent.com/15915214/163733365-04145f35-6c0b-4565-ab32-bcc0545c7405.gif)

### Installation

Install the following npm module:
```bash
npm install multiple-themes-stitches
```
or with yarn:
```bash
yarn add -D multiple-themes-stitches
```

### Configuration

##### Step 1: Add the addon
Add the following content to .storybook/main.js.
```bash
module.exports = {
  addons: ['multiple-themes-stitches']
};
```

##### Step 2: Add the Themes
Add your themes to your ```stitches.config.ts```
```bash
const { createTheme } = createStitches({...});

const darkTheme = createTheme({
  colors: {
    primary: 'rgba(250,55,90,1)',
    secondary: 'rgba(65,125,165,1)',
  },
});

const lightTheme = createTheme({
  colors: {
    primary: 'rgba(65,125,165,1)',
    secondary: 'rgba(245,55,90,1)',
  },
});

const customTheme = createTheme({
  colors: {
    primary: 'rgba(245,100,5,1)',
    secondary: 'rgba(65,125,165,1)',
  },
});
```
And import your stitches Themes to .storybook/preview.js.
```bash
import { lightTheme, darkTheme, customTheme } from '../src/stitches.config'
```
Then pass the Stitches Themes to the addon via the exported parameters.
```bash
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
      },
      { 
        name: 'Custom', 
        theme: customTheme
      }
    ]
  },
}
```

#### Contributors ✨
Thanks go to these wonderful people
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/MichaelDM">
        <img src="https://avatars.githubusercontent.com/u/12537128?v=4" width="80px;" alt="" />
        <br />
        <sub>
          <b>Michael Machiah</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Noah-Lc">
        <img src="https://avatars.githubusercontent.com/u/15915214?v=4" width="80px;" alt="" />
        <br />
        <sub>
          <b>Noah Belahcen</b>
        </sub>
      </a>
    </td>  
  </tr>
</table>

Made with ☕