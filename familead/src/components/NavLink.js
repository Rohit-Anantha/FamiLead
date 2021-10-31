import './NavLink.scss';
import { useLocation } from 'react-router-dom';

const NavLink = ({ name, icon, link }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <a
      href={link}
      className={`NavLink ${location.pathname === link ? 'selected' : ''}`}
    >
      <div className='icon'>{icon}</div>
      {name}
    </a>
  );
};

export default NavLink;
