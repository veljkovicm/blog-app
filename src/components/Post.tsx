import {
  useState,
  useEffect,
  FunctionComponent,
} from 'react';
import {
  useParams,
  Link,
  useLocation,
} from 'react-router-dom'

import {
  PostInterface,
  SinglePostProps,
  LocationState,
} from '../types';
import { fetchSinglePost } from '../actions';


const Post: FunctionComponent<SinglePostProps> = (props) => {
  const {
    greetingMessage,
    post,
    feedPost,
  } = props;
  console.log(`${greetingMessage} ${Post.displayName}`);

  const location = useLocation<LocationState>();
  const passedPost = location.state?.post;

  const { id } = useParams<{ id: string }>();

  const [ singlePost, setSinglePost ] = useState<PostInterface | undefined>(post || passedPost);

  /* Only fetch if we didn't have a post passed */
  if(!post && !passedPost) {
    useEffect(() => {
      fetchSinglePost(id).then((res) => setSinglePost(res));
    }, []);
  }

  let postMarkup;

  if(singlePost) {
    postMarkup =
      <div className="posts__single">
        { feedPost ?
          <Link to={{ pathname: `/post/${singlePost.id}`, state: { post: singlePost }}} className="posts__single__title-link">
            <h2 className="posts__single__title">{singlePost.title}</h2>
          </Link> :
          <h3 className="posts__single__title">{singlePost.title}</h3>
        }
        <span className="posts__single__author">
          <div className="posts__single__author__name">
            <small>by</small>
            {singlePost.user.name}
          </div>
          <div className="posts__single__author__username">
            {`@${singlePost.user.username}`}
          </div>
        </span>
        <small className="posts__single__user-id">{singlePost.userId}</small>
        <span className="posts__single__body">{singlePost.body}</span>
        <div className="posts__single__comments">
          {
            singlePost.comments.map((comment) => (
              <div key={comment.id} className="posts__single__comments__single">
                <div className="posts__single__comments__single__image-wrapper">
                  <img src="https://picsum.photos/32" alt="" />
                </div>
                <div>
                  <h5 className="posts__single__comments__single__title">{comment.name}</h5>
                  <p className="posts__single__comments__single__body">{comment.body}</p>
                  <span className="posts__single__comments__single__user-email">{comment.email}</span>
                </div>
              </div>
            ))
          }
        </div>
        <hr />
      </div>
  }

  return (
    <>
      { !!singlePost && postMarkup }
    </>
  )
}

Post.displayName = 'Post';

export default Post;
