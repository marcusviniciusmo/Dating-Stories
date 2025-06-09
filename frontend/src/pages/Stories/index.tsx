import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/routes';

export function Stories() {
  return (
    <>
      <h1>STORIES PAGE</h1>
      <NavLink to={routes.home}>Back</NavLink>
    </>
  );
}
