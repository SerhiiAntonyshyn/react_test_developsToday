import Post from '../pages/posts/[postId]';
import { DELETE, LOAD } from './constants';

interface Action {
  type: string;
  payload: boolean | number;
}

const initialState = {
  postLoad: false,
  post: 0,
};

export type stateType = typeof initialState;

export const appReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        postLoad: action.payload,
      };
    case DELETE:
      return {
        ...state,
        post: action.payload
      }

    default:
      return { ...state };
  }
};
