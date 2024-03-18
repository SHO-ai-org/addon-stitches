import { useGlobals, useParameter } from "@storybook/manager-api";
import {
  IconButton,
  TooltipLinkList,
  WithTooltip,
} from "@storybook/components";
import React, { FC, Fragment, memo, useCallback, useMemo } from "react";
import { PARAM_KEY, THEME_NAME_KEY } from "./constants";
import {
  GlobalThemeState,
  Theme,
  ThemeObject,
  ThemeSelectorItem,
  ThemesParameter,
} from "./types";
import { PaintBrushIcon } from "@storybook/icons";

const iframeId = "storybook-preview-iframe";

const createThemeSelectorItem = (
  name: string,
  value: ThemeObject | undefined | null,
  change: (arg: { selected: ThemeObject | undefined | null; name: string | undefined | null }) => void,
  active: boolean
): ThemeSelectorItem => ({
  id: name,
  title: name,
  onClick: () => {
    change({ selected: value, name });
  },
  value,
  active,
});

const DEFAULT_THEMES_CONFIG: ThemesParameter = {
  disable: true,
  values: [],
};

const getThemeObjectByName = (
  currentSelectedName: string | undefined | null,
  themes: Theme[],
  defaultThemeName: string | undefined
) => {
  if (currentSelectedName === null) {
    return null;
  }

  if (currentSelectedName) {
    const currentTheme = themes.find(
      (theme) => theme.name === currentSelectedName
    );
    if (currentTheme) {
      return currentTheme;
    }
  }
  if (defaultThemeName) {
    const defaultTheme = themes.find(
      (theme) => theme.name === defaultThemeName
    );
    if (defaultTheme) {
      return defaultTheme;
    }
  }
  return null;
};

// TODO: add support for default theme
export const ThemeSelector: FC = memo(() => {
  const themesConfig = useParameter<ThemesParameter>(
    PARAM_KEY,
    DEFAULT_THEMES_CONFIG
  );
  const themes = themesConfig.values;
  const defaultTheme = themesConfig.default;
  const [globals, updateGlobals] = useGlobals();

  const globalsThemeName: string = globals[THEME_NAME_KEY];

  const selectedTheme = useMemo(() => {
    return getThemeObjectByName(globalsThemeName, themes, defaultTheme);
  }, [globalsThemeName, defaultTheme, themes]);
  const change = ({ name, selected }: GlobalThemeState) => {
    onThemeChange(name, selected);
  };

  const themeSelectorItems: ThemeSelectorItem[] = [
    createThemeSelectorItem("Clear theme", null, change, false),
  ];

  if (themes.length) {
    const _themes = themes.map((x) => ({
      name: x.name,
      theme: { className: x.theme.className },
    }));

    themeSelectorItems.push(
      ..._themes.map(({ name, theme }) =>
        createThemeSelectorItem(
          name,
          theme,
          change,
          name === selectedTheme?.name
        )
      )
    );
  }

  const changeTheme = (selected: ThemeObject | undefined | null) => {
    let targetEl: HTMLElement;
    const iframe = document.getElementById(iframeId) as any;

    if (iframe) {
      const iframeDocument =
        iframe.contentDocument || iframe.contentWindow.document;

      targetEl = iframeDocument.body;

      // Remove all theme class(es).
      themesConfig.values
        .filter((theme) => theme.theme)
        .forEach((current) => {
          if (current?.theme?.className) {
            targetEl.classList.remove(current.theme.className);
          }
        });

      if (selected) {
        // Add selected theme class(es).
        targetEl.className = selected.className;
      }
    }
  }

  const onThemeChange = useCallback(
    (name: string | null | undefined, selected: ThemeObject | undefined | null) => {
      updateGlobals({
        [THEME_NAME_KEY]: selected ? name : null,
      });
    },
    [themesConfig, globals, updateGlobals]
  );

  if (themesConfig.disable) {
    return null;
  }
  changeTheme(selectedTheme?.theme);
  return (
    <Fragment>
      <WithTooltip
        placement="top"
        trigger="click"
        closeOnOutsideClick
        tooltip={<TooltipLinkList links={themeSelectorItems} />}
      >
        <IconButton
          key="theme"
          title="Change the theme of the preview"
          active={selectedTheme !== null}
        >
          <PaintBrushIcon />
        </IconButton>
      </WithTooltip>
    </Fragment>
  );
});
