import './TaskList.scss';
import Task from './Task';

const TaskList = () => {
  const tasks = [
    {
      taskName: 'Take the trash out',
      description: 'It is your turn to take the trash out',
    },
    {
      taskName: 'Wash the dishes',
      description: "Don't forget to let the big pots soak",
    },

    {
      taskName: 'Walk the dog',
      description: 'Remember to take a poop bag with you',
    },
  ];
  return (
    <div className='TaskList'>
      {tasks.map((task) => (
        <Task taskName={task.taskName} description={task.description} />
      ))}
    </div>
  );
};

export default TaskList;
