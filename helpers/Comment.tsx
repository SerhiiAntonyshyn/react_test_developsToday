export default interface Comment {
  map(arg0: (item: any, index: any) => JSX.Element);
  body: string;
  id?: number;
  postId: number;
  length: number
}