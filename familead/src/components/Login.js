import './Login.scss';
import { FaGoogle } from 'react-icons/fa';
import logo from '../assets/undraw_gradma_wanr_transparent.png';

const Login = () => {
  return (
    <div className='Login'>
      <div className='login-form'>
        <img src={logo} alt='' />
        <h1>Welcome To FamiLead</h1>
        <button>
          <a href='/app/dashboard'>
            <FaGoogle />
            &nbsp;&nbsp;Sign in with Google
          </a>
        </button>
      </div>
    </div>
  );
};

export default Login;
