import React from 'react';
import Post from './Post/Post';
import s from './Mypost.module.css';

function Mypost(props) {
  // eslint-disable-next-line max-len
  const postsElements = props.postsData.map((posts) => <Post message={posts.message} likesCount={posts.likesCount} />);

  const onAddPost = () => {
    props.addPost();
  };
  const onPostChange = (e) => {
    const text = e.target.value;
    props.onPostChange(text);
  };
  return (
    <div className={s.post}>
      <div>
        <h3>My posts</h3>
        <div />
        <div>
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default Mypost;
