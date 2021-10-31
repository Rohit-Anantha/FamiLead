const Day = ({ dow, date }) => {
  return (
    <div>
      <p>
        <b>{dow}</b>
      </p>
      <p>{date}</p>
    </div>
  );
};

export default Day;
