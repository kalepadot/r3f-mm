/**
 * @file contexts/CursorContext/useCursor.js
 */
import * as React from 'react';
import { CursorContext } from './CursorContext';

export const useCursor = () => {
  const { state, dispatch } = React.useContext(CursorContext);
  // Make them public
  return [state, dispatch];
};
