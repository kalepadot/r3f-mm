/**
 * @file StickyButton.js
 */
import * as React from 'react';
import { useMenu } from '@/contexts/MenuContext/useMenuContext';
import { useCursorStyle } from '@/hooks/useCursorStyle';
import StickyCursor from '../StickyCursor';

import styles from './StickyButton.module.css';

const MenuButton = (
  { sticky = true, title = 'Lorem Ipsum', ...props },
  ref,
) => {
  const [, dispatch] = useMenu();
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const handleOnToggle = React.useCallback(() => {
    dispatch({ type: 'TOGGLE_MENU' });
  }, [dispatch]);

  return (
    <StickyCursor sticky={sticky}>
      <button
        className="text-white dark:text-black"
        onMouseEnter={addCursorBorder}
        onMouseLeave={removeCursorBorder}
        onClick={() => {
          handleOnToggle();
          onClick();
        }}
        ref={ref}
        {...props}
      >
        <span className="px-4 py-2 font-mono text-sm tracking-widest transition duration-500 ease-out bg-black hover:bg-accent2 active:bg-accent3 dark:bg-white">
          {title}
        </span>
      </button>
    </StickyCursor>
  );
};

export default React.memo(React.forwardRef(MenuButton));
