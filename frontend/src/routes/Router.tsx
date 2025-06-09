import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Stories } from '../pages/Stories';
import { NotFound } from '../pages/NotFound';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
