import { TAction } from '../../model/storeModel';
import { CART_ACTIONS } from './actions';

export type TCartState = { [key: string]:number }

export const cartReducer = (state: any = {}, action: TAction) : TCartState => {
  console.log('action: ', action);
  switch (action?.type) {
    case CART_ACTIONS.add: {
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };
    }
    case CART_ACTIONS.remove: {
      return {
        ...state,
        [action.payload]: (state[action.payload] || 1) - 1,
      };
    }
    case CART_ACTIONS.clear: {
      return {};
    }
    default:
      return state;
  }
};
