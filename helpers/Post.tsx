import Comment from './Comment';

export default interface Post {
  title: string;
  body: string;
  id: number;
  comments: Comment;
}
