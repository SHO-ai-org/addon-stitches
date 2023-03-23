export interface GlobalThemeState {
    name: string | null | undefined;
    selected: ThemeObject | undefined | null;
  }
  
  export interface ThemeSelectorItem {
    id: string;
    title: string;
    onClick: () => void;
    value: unknown;
    active: boolean;
  }
  
  export interface Theme {
    /**
    * name of the theme
    */
    name: string;
    /**
    * stitches theme object
    */
    theme: ThemeObject;
  }
  
  export interface ThemesParameter {
    /**
    * the list of themes to display in the dropdown
    */
    values: Theme[];
    /**
    * name of the theme to use by default
    */
    default?: string;
    /**
    * disable the addon
    */
    disable?: boolean;
  }
  
  export interface ThemesConfig {
    Themes: Theme[] | null;
    disable: boolean;
  }
  
  export interface ThemeObject {
    className: string,
  }