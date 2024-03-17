import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./products/Products.slice";

const persistConfig = {
  key: "root",
  //   storage,
};

export const reducers = combineReducers({
  products: productsSlice.reducer,
});

// const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: reducers,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
});

// export const persistor = persistStore(store);
export default store;
