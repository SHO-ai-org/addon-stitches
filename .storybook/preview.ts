import { Preview } from '@storybook/react';

import { darkTheme, lightTheme } from "../stitches.config";
import { ThemesParameter } from "../src";

const multipleThemesStitches: ThemesParameter = {
  values: [
    {
      name: "Light",
      theme: lightTheme,
    },
    {
      name: "Dark",
      theme: darkTheme,
    },
  ],
}
const preview: Preview = {
  parameters: {
    multipleThemesStitches,
  },
};

export default preview;
