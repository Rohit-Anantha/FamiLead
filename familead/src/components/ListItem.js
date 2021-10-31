import './ListItem.scss';

const ListItem = ({ name, items }) => {
  return (
    <div className='ListItem'>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
