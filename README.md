# Stitches Theme Selector

A storybook addon that allows your users to change the theme inside the preview.

![theme-selector](https://user-images.githubusercontent.com/15915214/136265555-441cdc75-1cc7-4cb4-89d3-6382faced3cd.gif)

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
Import your stitches Themes to .storybook/preview.js.
```bash
import { LightTheme, DarkTheme, CustomTheme } from '../src/stitches.config'
```
Then pass the Stitches Themes to the addon via the exported parameters.
```bash
export const parameters = {
  multipleThemesStitches: {
    values: [
      { 
        name: 'Light', 
        theme: LightTheme
      },
      { 
        name: 'Dark', 
        theme: DarkTheme
      },
      { 
        name: 'Custom', 
        theme: CustomTheme
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