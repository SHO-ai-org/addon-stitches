import React, { FunctionComponent, Fragment, useCallback, useMemo, memo } from 'react';
import memoize from 'memoizerific';

import { useParameter, useGlobals } from '@storybook/api';
import { logger } from '@storybook/client-logger';
import { Icons, IconButton, WithTooltip, TooltipLinkList } from '@storybook/components';
import { document } from 'global';
import { PARAM_KEY as THEMES_PARAM_KEY, THEME_KEY } from './constants';

import { ThemeSelectorItem, Theme, ThemesParameter, GlobalThemeState } from './types';
import { getThemeObjectByName } from './helpers';

const iframeId = 'storybook-preview-iframe';

const createThemeSelectorItem = memoize(1000)(
  (
    id: string,
    name: string,
    value: object,
    hasSwatch: boolean,
    change: (arg: { selected: object; name: string }) => void,
    active: boolean
  ): ThemeSelectorItem => ({
    id: id || name,
    title: name,
    onClick: () => {
      change({ selected: value, name });
    },
    value,
    active,
  })
);

const getDisplayedItems = memoize(10)(
  (
    themes: Theme[],
    selected: Theme ,
    change: (arg: { selected: Theme; name: string }) => void
  ) => {
    let themeSelectorItems: ThemeSelectorItem[] = [];

    themeSelectorItems.push(
      createThemeSelectorItem(null, 'Clear theme', null, null, change, false)
    );

    if (themes.length) {
      themeSelectorItems = [
        ...themeSelectorItems,
        ...themes.map(({ name, theme }) =>
        createThemeSelectorItem(
          null,
          name,
          theme,
          true,
          change,
          name === selected?.name
        )),
      ];
    }

    return themeSelectorItems;
  }
);

// TDOD: suppot the defqult option
const DEFAULT_THEMES_CONFIG: ThemesParameter = {
  default: null,
  disable: true,
  values: [],
};

export const ThemeSelector: FunctionComponent = memo(() => {
  const themesConfig = useParameter<ThemesParameter>(
    THEMES_PARAM_KEY,
    DEFAULT_THEMES_CONFIG
  );
  const [globals, updateGlobals] = useGlobals();

  const globalsThemeColor = globals[THEME_KEY]?.value;

  const selectedTheme = useMemo(() => {
    return getThemeObjectByName(
      globalsThemeColor,
      themesConfig.values,
      themesConfig.default,
    );
  }, [themesConfig, globalsThemeColor]);

  if (Array.isArray(themesConfig)) {
    logger.warn(
      'Addon Themes api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md'
    );
  }

  const onThemeChange = useCallback(
    (value: string, selected: any) => {
      updateGlobals({ [THEME_KEY]: selected ? { ...globals[THEME_KEY], value } : {} });
      
      let targetEl: HTMLElement;
      const iframe = document.getElementById(iframeId);
      
      if (iframe) {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        targetEl = iframeDocument.body;

        // Remove all theme class(es).
        themesConfig.values
        .filter(theme => theme.theme)
        .forEach(current => {
          if (current?.theme?.className) {
            targetEl.classList.remove(current.theme.className)
          }
        });

        if (selected) {
          // Add selected theme class(es).
          targetEl.className = selected.className;
        }
      }
    },
    [themesConfig, globals, updateGlobals]
  );

  if (themesConfig.disable) {
    return null;
  }

  return (
    <Fragment>
      <WithTooltip
        placement="top"
        trigger="click"
        closeOnClick
        tooltip={({ onHide }) => {
          return (
            <TooltipLinkList
              links={getDisplayedItems(
                themesConfig.values,
                selectedTheme,
                ({ name, selected }: GlobalThemeState) => {
                  onThemeChange(name, selected);
                  onHide();
                }
              )}
            />
          );
        }}
      >
        <IconButton
          key="theme"
          title="Change the theme of the preview"
          active={selectedTheme !== null}
        >
          <Icons icon="beaker" />
        </IconButton>
      </WithTooltip>
    </Fragment>
  );
});
