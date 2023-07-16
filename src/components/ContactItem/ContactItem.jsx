import { Item, ItemList, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id, onClick }) => {
  return (
    <Item key={id}>
      <ItemList>
        <p>
          {name} : {number}
        </p>
        <Button type="button" onClick={() => onClick(id)}>
          Delete
        </Button>
      </ItemList>
    </Item>
  );
};

export default ContactItem;