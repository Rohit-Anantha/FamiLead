import './Tasks.scss';
import TaskList from './TaskList';

const Tasks = () => {
  return (
    <div className='Tasks'>
      <h2>Hello Jenn!</h2>
      <h1>You've got 3 tasks today</h1>
      <TaskList></TaskList>
    </div>
  );
};

export default Tasks;
