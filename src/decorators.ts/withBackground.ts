import { useMemo, useEffect } from '@storybook/addons';
// import { AnyFramework, PartialStoryFn as StoryFunction, StoryContext } from '@storybook/csf';

import { PARAM_KEY as BACKGROUNDS_PARAM_KEY } from '../constants';
import {
  clearStyles,
  addBackgroundStyle,
  getBackgroundColorByName,
  isReduceMotionEnabled,
} from '../helpers';

export const withBackground = (
  StoryFn: any, // TODO: fix any
  context: any // TODO: fix any
  // StoryFn: StoryFunction<AnyFramework>,
  // context: StoryContext<AnyFramework>
) => {
  const { globals, parameters } = context;
  const globalsBackgroundColor = globals[BACKGROUNDS_PARAM_KEY]?.value;
  const backgroundsConfig = parameters[BACKGROUNDS_PARAM_KEY];

  const selectedBackgroundColor = useMemo(() => {
    if (backgroundsConfig.disable) {
      return 'transparent';
    }

    return getBackgroundColorByName(
      globalsBackgroundColor,
      backgroundsConfig.values,
      backgroundsConfig.default
    );
  }, [backgroundsConfig, globalsBackgroundColor]);

  const isActive = useMemo(
    () => selectedBackgroundColor && selectedBackgroundColor !== 'transparent',
    [selectedBackgroundColor]
  );

  const selector =
    context.viewMode === 'docs' ? `#anchor--${context.id} .docs-story` : '.sb-show-main';

  const backgroundStyles = useMemo(() => {
    const transitionStyle = 'transition: background-color 0.3s;';
    return `
      ${selector} {
        background: ${selectedBackgroundColor} !important;
        ${isReduceMotionEnabled() ? '' : transitionStyle}
      }
    `;
  }, [selectedBackgroundColor, selector]);

  useEffect(() => {
    const selectorId =
      context.viewMode === 'docs'
        ? `addon-backgrounds-docs-${context.id}`
        : `addon-backgrounds-color`;

    if (!isActive) {
      clearStyles(selectorId);
      return;
    }

    addBackgroundStyle(
      selectorId,
      backgroundStyles,
      context.viewMode === 'docs' ? context.id : null
    );
  }, [isActive, backgroundStyles, context]);

  return StoryFn();
};
