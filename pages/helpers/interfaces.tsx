export interface Post {
  title: string;
  body: string;
  id: number;
  comments: Comment[];
}

export interface Comment {
  body: string;
  id?: number;
  postId: number;
}
