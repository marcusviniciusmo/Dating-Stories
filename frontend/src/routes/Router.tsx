import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { Home } from '../pages/Home';
import { Stories } from '../pages/Stories';
import { NotFound } from '../pages/NotFound';

export function Router() {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.stories} element={<Stories />} />
      <Route path={routes.notFound} element={<NotFound />} />
    </Routes>
  );
}
