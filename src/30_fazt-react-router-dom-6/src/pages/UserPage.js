// @ts-nocheck
import { useParams } from 'react-router-dom';

export default function UsersPage() {
  /* PARAMETRO: obtener el id digitado en la barra de busqueda http://localhost:3000/users/id
  puedo mandar una peticion fect para obtener el id del backend */
  const { id } = useParams();

  return (
    <div>
      <h1>user {id}</h1>
    </div>
  );
}
