/**
 * StickyCursor.jsx
 */
 import * as React from 'react';

 // Component(s)
 import StickyCursor from './StickyCursor';

 export default {
   title: 'StickyCursor',
   component: StickyCursor,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <StickyCursor />;

 Default.storyName = 'default';
