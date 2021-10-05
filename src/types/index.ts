import { ReactElement } from 'react';

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