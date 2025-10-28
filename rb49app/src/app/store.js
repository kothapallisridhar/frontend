import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todolistReducer from "../features/todolist/todolistSlice";
import { productsApi } from "../services/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { recipesApi } from "../services/recipesApi";
import { leadsApi } from "../services/leadsApi";

export const store = configureStore({
  reducer: {
    counterR: counterReducer,
    todolistR: todolistReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
    [leadsApi.reducerPath]: leadsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      recipesApi.middleware,
      leadsApi.middleware
    ),
});
setupListeners(store.dispatch);
