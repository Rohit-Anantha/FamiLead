import './Task.scss';
const Task = ({ taskName, description }) => {
  return (
    <div className='Task'>
      <h3>{taskName}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Task;
