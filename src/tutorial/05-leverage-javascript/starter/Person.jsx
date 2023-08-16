import avatar from '../../../assets/default-avatar.svg';

export function Person({ name, nickName = 'Bobby Lee', images }) {
  //   const img = images && images[0] && images[0].small && images[0].small.url;

  const img = images?.[0]?.small?.url ?? avatar; // The nullish operator only return null or undefined

  return (
    <div>
      <img src={img} alt={name} style={{ width: '70px' }} />
      <h4>{name}</h4>
      <p>Nickname : {nickName} </p>
    </div>
  );
}
