import React from 'react';
import './Profile.module.css';
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';
import MypostContainer from './Myposts/MypostContainer';

function Profile() {
  return (
    <div>
      <ProfileInfo />
      <MypostContainer />
    </div>
  );
}

export default Profile;
