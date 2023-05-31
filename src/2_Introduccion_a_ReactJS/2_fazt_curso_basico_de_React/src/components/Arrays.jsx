/* eslint-disable react/jsx-no-target-blank */

const Arrays = () => {
  const users = [
    {
      id: 1,
      name: 'usuario 1',
      image: 'https://robohash.org/user1',
    },
    {
      id: 2,
      name: 'usuario 2',
      image: 'https://robohash.org/user2',
    },
    {
      id: 3,
      name: 'usuario 3',
      image: 'https://robohash.org/user3',
    },
  ]

  return (
    <>
      <h1>Arrays en React</h1>
      <code>Warning: Each child in a list should have a unique “key” prop.</code> <br />
      <a href='https://www.youtube.com/watch?v=rLoWMU4L_qE&t=8582s' target='_blank'>
        Tutorial de Fazt
      </a> <br />
      <a href=' https://react.dev/learn/rendering-lists' target='_blank'>
        Documentacion Oficial
      </a>

      {users.map((user, index) => {
        return (
          /* El elemento contenedor padre (NO los hijos) 
             debe contener el indice key={index} */
          <ul key={index}>
            <li>{user.id}</li>
            <li>{user.name}</li>
            <img src={user.image} alt='image' style={{ maxWidth: '100px' }} />
          </ul>
        )
      })}
    </>
  )
}

export default Arrays
