import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/routes';

export function Home() {
  return (
    <>
      <h1>HOME PAGE</h1>
      <NavLink to={routes.stories}>Stories</NavLink>
    </>
  );
}
