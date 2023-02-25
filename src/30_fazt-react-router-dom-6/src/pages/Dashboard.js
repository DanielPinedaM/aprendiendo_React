// @ts-nocheck

/* 
useHistory  v5
useNavigate v6 */
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  // const history = useHistory();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', {
      // replace: true,
    });
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <Link to="welcome">ir a welcome</Link>
      <br />
      <Link to="goodbye">ir a goodbye</Link>

      <Outlet /> {/* <p>Welcome!</p> y <p>goodbye!</p> estan escritos antes del boton */}

      <button onClick={handleClick}>Logout</button>

    </div>
  );
}
