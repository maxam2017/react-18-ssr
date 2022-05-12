import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Thinking from './pages/thinking';
import Home from './pages/index';
import NotFound from './components/NotFound';

const ROUTES = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/thinking',
    element: <Thinking />,
  },
];

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
