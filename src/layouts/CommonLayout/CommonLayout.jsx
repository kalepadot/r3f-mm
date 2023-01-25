/**
 * @file CommonLayout.js
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import styles from './CommonLayout.module.css';

import AudioToggle from '@/components/AudioToggle';
import DebugScreen from '@/components/DebugScreen';

import { useCursorStyle } from '@/hooks/useCursorStyle';

const CommonLayout = ({
  tagName: Tag = 'div',
  className = 'relative h-auto min-h-screen bg-white dark:bg-black',
  variant = 'default',
  children = '',
  pageTitle = 'prototype',
}) => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <Tag
      className={`${styles.common_layout} ${
        styles[`common_layout__${variant}`]
      } ${className}`}
      id="main"
    >
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        data-scroll-section
        className={`${styles.main} flex flex-grow flex-col h-full`}
      >
        {children}
      </main>
      <DebugScreen />
      <footer
        data-scroll-section
        className={`${styles.footer} w-full select-none tracking-tight font-light font-pp h-[50px] dark:text-white text-black flex align-center items-center justify-center uppercase`}
      >
        <p>Ready to escape the waking world?</p>
      </footer>
      <div
        className="pointer-events-none fixed bottom-[15px] left-[15px]"
        onMouseEnter={addCursorBorder}
        onMouseLeave={removeCursorBorder}
      >
        <AudioToggle />
      </div>
    </Tag>
  );
};

CommonLayout.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default CommonLayout;
