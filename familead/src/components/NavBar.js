import './NavBar.scss';
import NavLinks from './NavLinks';
import logo from '../assets/undraw_gradma_wanr_transparent.png';
import Profile from './Profile';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='logo-container'>
        <img src={logo} alt='' />
        <h3>FamilLead</h3>
      </div>
      <NavLinks></NavLinks>
      <Profile></Profile>
    </div>
  );
};

export default NavBar;
