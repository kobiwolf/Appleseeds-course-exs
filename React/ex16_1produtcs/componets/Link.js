import { Link } from 'react-router-dom';

function Linky({ path, text }) {
  return <Link path={path}>{text}</Link>;
}
export default Linky;
