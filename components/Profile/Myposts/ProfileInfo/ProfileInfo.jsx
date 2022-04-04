import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo() {
  return (
    <div>
      <div>
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270"
          alt="rf"
        />
      </div>
      <div className={s.descriptionBlock}>
        ava + laja
      </div>
    </div>
  );
}

export default ProfileInfo;
