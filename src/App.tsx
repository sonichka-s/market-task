import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import ProductsList from "./components/ProductsList/ProductsList";
import { SplitCol, SplitLayout } from "@vkontakte/vkui";
import Cart from "./components/Cart/Cart";
import ReduxProvider from "./store/ReduxProvider";

function App() {
  return (
    <ReduxProvider>
      <SplitLayout style={{ gap: 12 }}>
        <SplitCol width={840}>
          <ProductsList />
        </SplitCol>
        <SplitCol width={280}>
          <Cart />
        </SplitCol>
      </SplitLayout>
    </ReduxProvider>
  );
}

export default App;
