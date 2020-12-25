import { DELETE, LOAD } from './constants';
import axios from 'axios';

export const LOAD_POST = (load: boolean) => {
  return {
    type: DELETE,
    payload: load,
  };
};

export const DELETE_POST = (post: number | string[]) => {
  return {
    type: LOAD,
    payload: post,
  };
};

export const POST_DATA = (title: string, body: string, success: Function) => {
  return async (dispatch) => {
    const posts = await axios
      .post('https://simple-blog-api.crew.red/posts', { title, body })
      .then((e) => {
        success(true);
        dispatch(LOAD_POST(false));
      })
      .catch((err) => console.log(err));
    return posts
  };
};

export const POST_DATA_COMMENT = (body: string, id: string | string[]) => {
  return () => {
    axios
      .post('https://simple-blog-api.crew.red/comments', {
        postId: Number(id),
        body,
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
};

export const DELETE_POST_DATA = (id: number | string[]) => {
  return (dispatch) => {
    axios
      .delete(`https://simple-blog-api.crew.red/posts/${id}`)
      .then(() => {
        dispatch(DELETE_POST(id));
      })
      .catch((err) => console.log(err));
  };
};

