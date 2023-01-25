/**
 * @file contexts/MenuContext/useMenu.js
 */
import * as React from 'react';
import { MenuContext } from './MenuContext';

export const useMenu = () => {
  const { state, dispatch } = React.useContext(MenuContext);
  return [state, dispatch];
};
