import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Thinking from './pages/thinking';
import Home from './pages/index';
import NotFound from './components/NotFound';
import './assets/app.css';

const ROUTES = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/thinking',
    element: <Thinking />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default function AppRoutes() {
  if (typeof window === 'undefined') {
    return (
      <Routes>
        {ROUTES.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
