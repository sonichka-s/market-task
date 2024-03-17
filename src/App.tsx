import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";
import { SplitCol, SplitLayout } from "@vkontakte/vkui";
import Cart from "./components/Cart/Cart";
import ReduxProvider from "./store/ReduxProvider";

function App() {
  return (
    <ReduxProvider>
      <SplitLayout aria-colcount={4} style={{ gap: 12 }}>
        <SplitCol aria-colindex={1}>
          <ProductsList />
        </SplitCol>
        <SplitCol aria-colindex={4}>
          <Cart />
        </SplitCol>
      </SplitLayout>
    </ReduxProvider>
  );
}

export default App;
