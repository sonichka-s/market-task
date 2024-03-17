import {
  Group,
  IconButton,
  Panel,
  PanelHeader,
  SimpleCell,
} from "@vkontakte/vkui";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../types/Redux.types";
import { Icon16Delete } from "@vkontakte/icons";
import { productsActions } from "../../store/products/Products.slice";
import { IAddedProduct } from "../../interfaces/Product.interface";

interface ICartProps {}

const Cart: FC<ICartProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { addedProducts } = useSelector((state: RootState) => state.products);

  const onProductRemove = (product: IAddedProduct) => {
    dispatch(productsActions.removeProduct(product));
  };

  return (
    <Panel>
      <PanelHeader>Корзина</PanelHeader>
      <Group>
        {addedProducts.length
          ? addedProducts.map((item) => (
              <SimpleCell
                after={
                  <IconButton onClick={() => onProductRemove(item)}>
                    <Icon16Delete />
                  </IconButton>
                }
                subtitle={`Количество: ${item.amount}`}
                key={item.product.id + item.amount}
              >
                {item.product.title}
              </SimpleCell>
            ))
          : "Вы пока не добавили товары в корзину"}
      </Group>
      <div>Итого: {addedProducts.reduce((acc, cur) => acc += cur.amount * parseFloat(cur.product.price), 0)}$</div>
    </Panel>
  );
};

export default Cart;
