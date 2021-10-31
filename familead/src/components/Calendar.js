import './Calendar.scss';
import Day from './Day';

const Calendar = () => {
  const days = [
    { dow: 'Sun', date: 24 },
    { dow: 'Mon', date: 25 },
    { dow: 'Tue', date: 26 },
    { dow: 'Wed', date: 27 },
    { dow: 'Thu', date: 28 },
    { dow: 'Fri', date: 29 },
    { dow: 'Sat', date: 30 },
  ];
  return (
    <div className='Calendar'>
      {days.map((day) => (
        <Day dow={day.dow} date={day.date}></Day>
      ))}
    </div>
  );
};

export default Calendar;
