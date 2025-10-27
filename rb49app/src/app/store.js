import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todolistReducer from "../features/todolist/todolistSlice";
import { productsApi } from "../services/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { recipesApi } from "../services/recipesApi";

export const store = configureStore({
  reducer: {
    counterR: counterReducer,
    todolistR: todolistReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      recipesApi.middleware
    ),
});
setupListeners(store.dispatch);
