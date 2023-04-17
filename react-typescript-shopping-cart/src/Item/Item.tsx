import Button from '@mui/material/Button';
// types

import { CartItemType } from '../App';
import { Wrapper } from './Item.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart}) => (
    <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
        <h3>
            {item.title}
        </h3>
        <h3>
            {item.description}
        </h3>
        <h3>
            ${item.price}
        </h3>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </div>
    </Wrapper>
)

export default Item;