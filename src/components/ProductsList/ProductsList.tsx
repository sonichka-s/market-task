import { Group, Panel, PanelHeader } from "@vkontakte/vkui";
import { FC, useEffect } from "react";
import ProductCard from "../../UI/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/products/Products.actions";
import { AppDispatch, RootState } from "../../types/Redux.types";

interface IProductsListProps {}

const ProductsList: FC<IProductsListProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Panel id="products_list">
      <PanelHeader>Products</PanelHeader>
      <Panel>
        {products.length
          ? products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          : ""}
      </Panel>
    </Panel>
  );
};

export default ProductsList;
