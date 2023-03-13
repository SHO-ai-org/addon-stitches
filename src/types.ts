export interface GlobalThemeState {
    name: string | undefined;
    selected: unknown | undefined;
  }
  
  export interface ThemeSelectorItem {
    id: string;
    title: string;
    onClick: () => void;
    value: unknown;
    active: boolean;
  }
  
  export interface Theme {
    name: string;
    theme: ThemeObject;
  }
  
  export interface ThemesParameter {
    disable?: boolean;
    values: Theme[];
  }
  
  export interface ThemesConfig {
    Themes: Theme[] | null;
    disable: boolean;
  }
  
  export interface ThemeObject {
    className: string,
  }