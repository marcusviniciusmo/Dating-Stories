import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Stories } from '../pages/Stories';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stories" element={<Stories />} />
    </Routes>
  );
}
