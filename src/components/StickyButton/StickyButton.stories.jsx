/**
 * StickyButton.jsx
 */
 import * as React from 'react';

 // Component(s)
 import StickyButton from './StickyButton';

 export default {
   title: 'StickyButton',
   component: StickyButton,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <StickyButton />;

 Default.storyName = 'default';
