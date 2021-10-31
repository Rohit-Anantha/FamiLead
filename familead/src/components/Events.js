import './Events.scss';
import Calendar from './Calendar';
import Event from './Event';
import FamilyBanner from './FamilyBanner';

const Events = () => {
  const events = [
    {
      title: 'Music Class',
      describe: 'Bobby has guitar class',
      time: '10:00',
    },
    {
      title: 'Family meeting',
      describe: 'Discuss trip plan',
      time: '11:00',
    },
    {
      title: 'Dinner party',
      describe: 'Dinner with neighbors',
      time: '8:00',
    },
  ];
  return (
    <div className='Events'>
      <FamilyBanner />
      {/*<h1 className='header'>Upcoming</h1>*/}
      <h1 className='date'>Oct 30, 2021</h1>
      <h1>Today</h1>
      <Calendar></Calendar>
      {events.map((event) => (
        <Event
          title={event.title}
          description={event.describe}
          time={event.time}
        />
      ))}
    </div>
  );
};

export default Events;
