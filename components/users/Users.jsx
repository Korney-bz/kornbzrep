import React from 'react';
import styles from './users.module.css';

function Users(props) {
  return (
    <div>
      {
                props.users.map((u) => (
                  <div key={u.id}>
                    <span>
                      <div>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img src={u.photoUrl} className={styles.userPhoto} />
                      </div>
                      <div>
                        {/* eslint-disable-next-line max-len,react/button-has-type */}
                        {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                        // eslint-disable-next-line react/button-has-type
                          : <button onClick={() => props.follow(u.id)}>Follow</button>}
                      </div>
                    </span>
                    <span>
                      <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                      </span>
                      <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                      </span>
                    </span>
                  </div>
                ))
            }
    </div>
  );
}

export default Users;
