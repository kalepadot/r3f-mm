/**
 * @file /contexts/MenuContext.js
 */
import * as React from 'react';
import PropTypes from 'prop-types';
export const INITIAL_STATE = {
  isMenuOpen: false,
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU': {
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    }
    default: {
      return state;
    }
  }
};

const MenuContext = React.createContext();

// Create the provider
const MenuProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(rootReducer, INITIAL_STATE);
  const store = React.useMemo(() => ({ state, dispatch }), [state]);
  return <MenuContext.Provider value={store}>{children}</MenuContext.Provider>;
};

MenuProvider.propTypes = {
  children: PropTypes.node,
};

export { MenuContext, MenuProvider };
