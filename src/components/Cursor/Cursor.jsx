/**
 * @file Cursor.js
 */
import * as React from 'react';
import PropTypes from 'prop-types';

import { useCursor } from '@/contexts/CursorContext/useCursorContext';

import styles from './Cursor.module.css';

const Cursor = ({
  tagName: Tag = 'div',
  className = '',
  variant = 'default',
}) => {
  const cursorRef = React.useRef();
  const [{ cursorStyle, position }] = useCursor();

  const { color, bordered } = cursorStyle;

  const baseClassname = `fixed top-0 left-0 rounded-full pointer-events-none z-infinity`;

  React.useEffect(() => {
    const onMouseMove = event => {
      const x = position ? position.x : event.clientX;
      const y = position ? position.y : event.clientY;
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [position]);

  return (
    <Tag
      className={`${styles.cursor} ${
        styles[`cursor__${variant}`]
      } ${baseClassname} ${className}`}
      ref={cursorRef}
      style={{
        width: bordered ? '64px' : '36px',
        height: bordered ? '64px' : '36px',
        margin: bordered ? '-32px 0 0 -32px' : '-18px 0 0 -18px',
        borderColor: color ? color : 'white',
        borderWidth: bordered ? '5px' : '18px',
        transform: 'translate3d(-100%, -100%, 0)',
        transition: 'all 0.1s ease-out',
        transitionProperty: 'width, height, border',
        willChange: 'width, height, transform, border',
      }}
    >
      <style jsx>{`
        @media (hover: none) and (pointer: coarse) {
          display: none;
        }
      `}</style>
    </Tag>
  );
};

Cursor.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
};

export default React.memo(Cursor);
