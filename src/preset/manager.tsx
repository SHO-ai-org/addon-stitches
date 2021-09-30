import React, { Fragment } from 'react';

import { addons, types } from "@storybook/addons";

import { ADDON_ID, TOOL_ID, THEME_ID } from "../constants";
import { Tool } from "../Tool";
import { ThemeSelector } from "../ThemeSelector";

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Themes",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
  });

  addons.add(THEME_ID, {
    type: types.TOOL,
    title: "Themes",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => (
      <Fragment>
        <ThemeSelector />
      </Fragment>
    ),
  });
});
