import { Link } from 'react-router-dom';
import Result from '../components/Result';

function Hello() {
  return (
    <Link to="/thinking">
      <Result image="/blob-waving.gif" text="Click me!" />
    </Link>
  );
}

export default Hello;
