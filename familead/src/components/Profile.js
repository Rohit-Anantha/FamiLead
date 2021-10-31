import './Profile.scss';

const Profile = () => {
  return (
    <div className='Profile'>
      <img
        src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        alt='profile-pic'
        className='profile-pic'
      />
      <div className='info'>
        <h2 className='name'>Jenn Wilson</h2>
        <p className='email'>jen.wil@gmail.com</p>
      </div>
    </div>
  );
};

export default Profile;
