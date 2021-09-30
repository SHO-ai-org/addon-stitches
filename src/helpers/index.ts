import global from 'global';
import dedent from 'ts-dedent';

import { logger } from '@storybook/client-logger';

import { Background, Theme } from '../types';

const { document, window } = global;

export const isReduceMotionEnabled = () => {
  const prefersReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  return prefersReduceMotion.matches;
};

export const getBackgroundColorByName = (
  currentSelectedValue: string,
  backgrounds: Background[] = [],
  defaultName: string
): string => {
  if (currentSelectedValue === 'transparent') {
    return 'transparent';
  }

  if (backgrounds.find((background) => background.value === currentSelectedValue)) {
    return currentSelectedValue;
  }

  const defaultBackground = backgrounds.find((background) => background.name === defaultName);
  if (defaultBackground) {
    return defaultBackground.value;
  }

  if (defaultName) {
    const availableColors = backgrounds.map((background) => background.name).join(', ');
    logger.warn(
      dedent`
        Backgrounds Addon: could not find the default color "${defaultName}".
        These are the available colors for your story based on your configuration:
        ${availableColors}.
      `
    );
  }

  return 'transparent';
};

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

export const clearStyles = (selector: string | string[]) => {
  const selectors = Array.isArray(selector) ? selector : [selector];
  selectors.forEach(clearStyle);
};

const clearStyle = (selector: string) => {
  const element = document.getElementById(selector) as HTMLElement;
  if (element) {
    element.parentElement.removeChild(element);
  }
};

export const addGridStyle = (selector: string, css: string) => {
  const existingStyle = document.getElementById(selector) as HTMLElement;
  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    const style = document.createElement('style') as HTMLElement;
    style.setAttribute('id', selector);
    style.innerHTML = css;
    document.head.appendChild(style);
  }
};

export const addBackgroundStyle = (selector: string, css: string, storyId: string) => {
  const existingStyle = document.getElementById(selector) as HTMLElement;
  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    const style = document.createElement('style') as HTMLElement;
    style.setAttribute('id', selector);
    style.innerHTML = css;

    const gridStyleSelector = `addon-backgrounds-grid${storyId ? `-docs-${storyId}` : ''}`;
    // If grids already exist, we want to add the style tag BEFORE it so the background doesn't override grid
    const existingGridStyle = document.getElementById(gridStyleSelector) as HTMLElement;
    if (existingGridStyle) {
      existingGridStyle.parentElement.insertBefore(style, existingGridStyle);
    } else {
      document.head.appendChild(style);
    }
  }
};
