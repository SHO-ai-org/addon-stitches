import { ReactElement } from 'react';

export interface GlobalState {
  name: string | undefined;
  selected: string | undefined;
}

export interface BackgroundSelectorItem {
  id: string;
  title: string;
  onClick: () => void;
  value: string;
  active: boolean;
  right?: ReactElement;
}

export interface Background {
  name: string;
  value: string;
}

export interface BackgroundsParameter {
  default?: string;
  disable?: boolean;
  values: Background[];
}

export interface BackgroundsConfig {
  backgrounds: Background[] | null;
  selectedBackgroundName: string | null;
  defaultBackgroundName: string | null;
  disable: boolean;
}

export interface GlobalThemeState {
  name: string | undefined;
  selected: object | undefined;
}

export interface ThemeSelectorItem {
  id: string;
  title: string;
  onClick: () => void;
  value: object;
  active: boolean;
  right?: ReactElement;
}

export interface Theme {
  name: string;
  theme: ThemeObject;
}

export interface ThemesParameter {
  default?: string;
  disable?: boolean;
  values: Theme[];
}

export interface ThemesConfig {
  Themes: Theme[] | null;
  selectedThemeName: string | null;
  defaultThemeName: string | null;
  disable: boolean;
}

export interface ThemeObject {
  className: string,
  selector: string,
  colors: object
}