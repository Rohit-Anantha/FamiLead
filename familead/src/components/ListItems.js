import './ListItems.scss';
import ListItem from './ListItem';

const ListItems = () => {
  const listItems = [
    {
      name: 'Costco',
      items: ['Milk', 'Bread', 'Eggs'],
    },
    {
      name: 'School',
      items: ['Books', 'Pens', 'ID'],
    },
    {
      name: 'Clothes',
      items: ['Pants', 'Shoes', 'Shirts'],
    },
  ];
  return (
    <div className='ListItems'>
      {listItems.map((listItem) => (
        <ListItem name={listItem.name} items={listItem.items} />
      ))}
    </div>
  );
};

export default ListItems;
