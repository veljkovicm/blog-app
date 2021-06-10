import {
  useState,
  useEffect,
  FunctionComponent,
  FormEvent,
} from 'react';

import { AppProps, PostInterface } from '../types';
import Post from './Post';
import { fetchJson } from '../actions';


const Feed: FunctionComponent<AppProps> = ({ greetingMessage }) => {
  console.log(`${greetingMessage} ${Feed.displayName}`);

  const [ posts, setPosts ] = useState<PostInterface[]>([]);
  const [ originalPosts, setOriginalPosts ] = useState<PostInterface[]>([]);
  const [ searchValue, setSearchValue ] = useState('');


  useEffect(() => {
    fetchJson().then((res) => {
      setPosts(res);
      setOriginalPosts(res);
    });
  }, []);

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);

    /* Filter posts by name or username */
    const filtered = originalPosts.filter((post) =>
      post.user.username.toLowerCase().includes(e.currentTarget.value.toLowerCase()) ||
      post.user.name.toLowerCase().includes(e.currentTarget.value.toLowerCase()));
    setPosts(filtered);

    /* If input is cleared, show all posts again */
    if(!e.currentTarget.value.length) {
      setPosts(originalPosts);
    }
  }

  const postsMarkup = posts.map((post: PostInterface) => (
    <div key={post.id} className="posts__single">
      <Post
        post={post}
        greetingMessage={greetingMessage}
        feedPost={true}
      />
    </div>
  ));

  return (
    <div className="posts">
      <div className="posts__search">
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search"
        />
      </div>
      {posts.length ? postsMarkup : searchValue && <div className="posts__no-results">No results</div>}
    </div>
  );
};

Feed.displayName = 'Feed';

export default Feed;
