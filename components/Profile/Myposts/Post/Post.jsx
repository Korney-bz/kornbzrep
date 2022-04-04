import React from 'react';
import s from './Post.module.css';

function Post(props) {
  return (
    <div className={s.pcontent}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src="https://s2.afisha.ru/mediastorage/88/46/14ffc980f79447ef82470f414688.jpg" />
      {props.message}
      <div>
        <span>Likes</span>
        {' '}
        {props.likesCount}
      </div>
    </div>
  );
}

export default Post;
