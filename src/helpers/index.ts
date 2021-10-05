import dedent from 'ts-dedent';

import { logger } from '@storybook/client-logger';

import { Theme } from '../types';


export const getThemeObjectByName = (currentSelectedName: string, themes: Theme[] = [], defaultName: string) => {
  const currentTheme = themes.find((theme) => theme.name === currentSelectedName)
  if (currentTheme) {
    return currentTheme;
  }

  const defaultTheme = themes.find((theme) => theme.name === defaultName);
  if (defaultTheme) {
    return defaultTheme;
  }

  if (defaultName) {
    const availableThemes = themes.map((theme) => theme.name).join(', ');
    logger.warn(
      dedent`
        Themes Addon: could not find the default theme "${defaultName}".
        These are the available themes for your story based on your configuration:
        ${availableThemes}.
      `
    );
  }

  return null;
};
