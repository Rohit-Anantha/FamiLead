import './Event.scss';
const Event = ({ title, description, time }) => {
  return (
    <div className='Event'>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
    </div>
  );
};

export default Event;
