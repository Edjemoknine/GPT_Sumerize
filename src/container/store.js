import { configureStore } from "@reduxjs/toolkit";
import { ArticleApi } from "./ArticleApi";
const store = configureStore({
  reducer: {
    [ArticleApi.reducerPath]: ArticleApi.reducer,
  },
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ArticleApi.middleware),
});

export default store;
