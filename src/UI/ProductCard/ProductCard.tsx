import { Button, Group, IconButton } from "@vkontakte/vkui";
import { FC, useEffect, useState } from "react";
import { IProduct } from "../../interfaces/Product.interface";
import s from "./ProductCard.module.scss";
import { Icon16Add, Icon16Dash } from "@vkontakte/icons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/Redux.types";
import { productsActions } from "../../store/products/Products.slice";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [amount, setAmont] = useState(0);
  const [added, setAdded] = useState(1);
  useEffect(() => setAmont(Math.floor(Math.random() * 19) + 1), []);

  const onAddedChange = (type: string) => {
    if (type === "add") {
      setAdded(added + 1);
    } else {
      setAdded(added - 1);
    }
  };

  const onProductAdd = () => {
    dispatch(productsActions.addProduct({ product: product, amount: added }));
  };

  return (
    <Group>
      <div className={s.body}>
        <img src={product.image} className={s.img} />
        <div className={s.info}>
          <div>{product.price}$</div>
          <div>{product.title}</div>
          <div className={s.description}>{product.description}</div>
          <div>Amount: {amount}</div>
        </div>
        <div className={s.bottomPanel}>
          <div className={s.amountControl}>
            <IconButton
              onClick={() => onAddedChange("remove")}
              disabled={added === 1}
            >
              <Icon16Dash />
            </IconButton>
            <div>{added}</div>
            <IconButton
              onClick={() => onAddedChange("add")}
              disabled={added === 10 || added === amount}
            >
              <Icon16Add />
            </IconButton>
          </div>
          <Button aria-label="add" onClick={onProductAdd}>
            Добавить в корзину
          </Button>
        </div>
      </div>
    </Group>
  );
};

export default ProductCard;
