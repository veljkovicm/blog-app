export interface AppProps {
  greetingMessage: string;
}

export interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: CommentInterface[];
  user: UserInterface;
}

export interface UserInterface {
  website: string;
  username: string;
  phone: string;
  name: string;
  id: number;
  email: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  },
  address: {
    street: string;
    city: string;
    suite: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  }
}

export interface FeedPostsProps extends AppProps {
  posts: PostInterface[];
}

export interface CommentInterface {
  postId: number;
  id: number,
  name: string;
  email: string;
  body: string;
}

export interface SinglePostProps extends AppProps {
  post?: PostInterface;
  feedPost?: boolean;
}

export interface LocationState {
  post: PostInterface;
}
