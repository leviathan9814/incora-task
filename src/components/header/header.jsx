
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">Incora Task</Link>
    </header>
  );
}

export default Header;
