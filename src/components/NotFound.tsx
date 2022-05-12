import { Link } from 'react-router-dom';
import Result from './Result';

export default function NotFound() {
  return (
    <Link to="/">
      <Result image="/blob-sighing.gif" text="Let's go home!" />
    </Link>
  );
}
