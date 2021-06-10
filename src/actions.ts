import axios from 'axios';
import {
  PostInterface,
  CommentInterface,
  UserInterface,
} from './types';
import {
  POSTS_URL,
  COMMENTS_URL,
  USERS_URL,
} from './constants';


export const fetchJson = async () => {
  return Promise.all([
    axios.get(POSTS_URL),
    axios.get(COMMENTS_URL),
    axios.get(USERS_URL),
  ]).then(([
    posts,
    comments,
    users,
  ]) => {
    return posts.data.map((post: PostInterface) => {
      return {
        ...post,
        comments: comments.data.filter((comment: CommentInterface) => comment.postId === post.id),
        user: users.data.filter((user: UserInterface) => user.id === post.userId)[0],
      }
    });
  })
};


export const fetchSinglePost = async (postId: string) => {
  const { data: post } = await axios.get(`${POSTS_URL}/${postId}`);
  const { data: comments } = await axios.get(`${POSTS_URL}/${postId}/comments`);
  const { data: user } = await axios.get(`${USERS_URL}/${post.userId}`)

  return {
    ...post,
    comments,
    user,
  }
}
