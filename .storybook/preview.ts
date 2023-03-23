import { Preview } from '@storybook/react';
import { darkTheme, lightTheme } from "../src/stitches.config";
import { ThemesParameter } from "../dist";

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
  default: "Light",
}
const preview: Preview = {
  parameters: {
    multipleThemesStitches,
  },
};

export default preview;