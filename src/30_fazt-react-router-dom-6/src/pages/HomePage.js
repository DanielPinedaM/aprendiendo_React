// @ts-nocheck
import {Link} from 'react-router-dom' // componente Link es lo mismo q etiqueta <a>

const userId = 10;

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>

      {/* <Link to='/users'>Usuarios</Link> */}
      <Link to={`/users/${userId}`}>Usuarios</Link> 
    </div>
  );
}
