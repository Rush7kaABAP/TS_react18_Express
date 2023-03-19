import { useReducer } from 'react';
import { Size } from '../../constants/ui';
import { Rating } from '../Rating/Rating';

const DEFAULT_FORM_VALUE = {
  name: '',
  text: '',
  rating: 5,
};

const FORM_ACTIONS = {
  changeName: 'changeName',
  changeText: 'changeText',
  changeRating: 'changeRating',
};

type locAction = {type: string, payload: string|number};
type locState = {[key: string]:string|number};

const reducer = (state:locState, action: locAction) => {
  switch (action.type) {
    case FORM_ACTIONS.changeName: {
      return {
        ...DEFAULT_FORM_VALUE,
        name: action.payload,
      };
    }
    case FORM_ACTIONS.changeText: {
      return {
        ...state,
        text: action.payload,
      };
    }
    case FORM_ACTIONS.changeRating: {
      return {
        ...state,
        rating: action.payload,
      };
    }
    default:
      return state;
  }
};

export const NewReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          value={formValue.name}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTIONS.changeName,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Text</label>
        <input
          value={formValue.text}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTIONS.changeText,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Rating</label>
        <Rating
          size={Size.m}
          value={formValue.rating}
          onChange={(value:any) =>
            dispatch({
              type: FORM_ACTIONS.changeRating,
              payload: value,
            })
          }
        />
      </div>
    </div>
  );
};
