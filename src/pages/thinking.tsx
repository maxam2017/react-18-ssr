import { Link } from 'react-router-dom';
import Result from '../components/Result';

function Thinking() {
  return (
    <Link to="/404">
      <Result image="/blob-thinking.gif" text="&()(^R%&$^&Y*(" />
    </Link>
  );
}

export default Thinking;
