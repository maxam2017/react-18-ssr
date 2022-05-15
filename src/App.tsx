import AppRoutes from './AppRoutes';
import Html from './components/Html';

export default function App() {
  return (
    <Html title="React SSR Demo">
      <AppRoutes />
    </Html>
  );
}
