const TOGGLE_NAV = 'navStater/TOGGLE_NAV';

export const toggleNav = () => ({ type: TOGGLE_NAV });

const initialState = {
    status : false
}

export default function navStater(state = initialState, action) {
    switch (action.type) {
      case TOGGLE_NAV:
        return {
          ...state,
          status: !state.status,
        };
      default:
        return state;
    }
  }
  