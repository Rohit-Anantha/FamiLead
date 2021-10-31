import './NavLinks.scss';
import NavLink from './NavLink';
import {
  IoGrid,
  IoChatbubbles,
  IoNavigateCircle,
  IoPeople,
} from 'react-icons/io5';

const NavLinks = () => {
  const navlinks = [
    {
      name: 'Dashboard',
      icon: <IoGrid />,
      link: '/app/dashboard',
    },
    {
      name: 'Chat',
      icon: <IoChatbubbles />,
      link: '/app/chat',
    },
    {
      name: 'Important Places',
      link: '/app/places',
      icon: <IoNavigateCircle />,
    },
  ];
  return (
    <div className='NavLinks'>
      {navlinks.map((navlink) => (
        <NavLink
          name={navlink.name}
          icon={navlink.icon}
          selected={navlink.selected}
          link={navlink.link}
        />
      ))}
    </div>
  );
};

export default NavLinks;
