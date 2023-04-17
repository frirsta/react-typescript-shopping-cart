import { Button } from "@mui/material";
import { CartItemType } from "../App";
import { Wrapper } from "./CartItem.styles";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <p>price: {item.price}</p>
      <p> total{(item.amount * item.price).toFixed(2)}</p>
      <Button
      size="small"
      disableElevation
      variant="contained"
      onClick={() => removeFromCart(item.id)}
      >-</Button>
      <Button
        size="small"
        disableElevation
        variant="contained"
        onClick={() => addToCart(item)}
      >
        +
      </Button>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;
