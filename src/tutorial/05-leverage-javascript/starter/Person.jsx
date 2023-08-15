import avatar from '../../../assets/default-avatar.svg';

import React from 'react';
export function Person({ name, nickName = 'Bobby', images }) {
  // const img = images && images[0] && images[0].small && images[0].small.url;

  const img = images?.[0]?.small?.url ?? avatar; // ?? return null or undefined values

  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name}</h4>
      <p>nickName : {nickName}</p>
    </div>
  );
}
