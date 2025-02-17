// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import merge from 'lodash/merge.js';

import { expandColorDictionary } from '../utils/index.js';
import { StyleDictionary } from '../utils/interfaces.js';
import { tokens as parentTokens } from '../visual-refresh/shadows.js';

const tokens: StyleDictionary.ShadowsDictionary = {
  shadowContainer: {
    light:
      '0 1px 1px 0 rgba(0, 28, 36, 0.3), 1px 1px 1px 0 rgba(0, 28, 36, 0.15), -1px 1px 1px 0 rgba(0, 28, 36, 0.15)',
    dark: '0 1px 1px 0 rgba(0, 0, 0, 0.3), 1px 1px 1px 0 rgba(0, 0, 0, 0.3), -1px 1px 1px 0 rgba(0, 0, 0, 0.3)',
  },
  shadowContainerStacked: '{shadowContainer}',
  shadowContainerActive: {
    light: '0px 4px 8px rgba(0, 28, 36, 0.45)',
    dark: '0px 4px 8px rgba(0, 28, 36, 0.45)',
  },
  shadowDropdown: '{shadowContainer}',
  shadowDropup: {
    light:
      '0 -1px 1px 0 rgba(0, 28, 36, 0.3), 1px -1px 1px 0 rgba(0, 28, 36, 0.15), -1px -1px 1px 0 rgba(0, 28, 36, 0.15)',
    dark: '0 -1px 1px 0 rgba(0, 0, 0, 0.3), 1px -1px 1px 0 rgba(0, 0, 0, 0.3), -1px -1px 1px 0 rgba(0, 0, 0, 0.3)',
  },
  shadowFlashCollapsed: '0px 2px 2px rgba(0, 0, 0, 0.15)',
  shadowFlashSticky: '{shadowPanel}',
  shadowModal: '{shadowContainer}',
  shadowPanel: '{shadowContainer}',
  shadowPanelToggle: '{shadowPanel}',
  shadowPopover: '{shadowSticky}',
  shadowSplitBottom: {
    light: '0 -2px 1px -1px rgba(0, 28, 36, 0.15), 0 -1px 1px -1px rgba(0, 28, 36, 0.3)',
    dark: '0 -2px 1px -1px rgba(0, 0, 0, 0.3), 0 -1px 1px -1px rgba(0, 0, 0, 0.3)',
  },
  shadowSplitSide: '{shadowContainer}',
  shadowSticky: { light: '0px 1px 4px -2px rgba(0, 28, 36, 0.5)', dark: '0px 1px 4px -2px rgba(0, 0, 0, 0.5)' },
  shadowStickyEmbedded: '{shadowSticky}',
  shadowStickyColumnFirst: {
    light: '4px 0 8px 0 rgba(0, 28, 36, 0.1)',
    dark: '4px 0 8px 0 rgba(0, 0, 0, 0.5)',
  },
  shadowStickyColumnLast: {
    light: '-4px 0 8px 0 rgba(0, 28, 36, 0.1)',
    dark: '-4px 0 8px 0 rgba(0, 0, 0, 0.5)',
  },
};

const expandedTokens: StyleDictionary.ExpandedColorScopeDictionary = merge(
  {},
  parentTokens,
  expandColorDictionary(tokens)
);
export { expandedTokens as tokens };
export const mode: StyleDictionary.ModeIdentifier = 'color';
