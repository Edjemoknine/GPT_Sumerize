import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://article-extractor-and-summarizer.p.rapidapi.com";
const aHeader = {
  "X-RapidAPI-Key": "6c2a704035mshed3f3f412f5f9aap1c236bjsnbaf789e00c56",
  "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
};

const FetchRequest = (url) => ({ url, headers: aHeader });

export const ArticleApi = createApi({
  reducerPath: "article",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getArticle: builder.query({
      query: (params) =>
        FetchRequest(
          `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        ),
    }),
  }),
});

// export const { usegetArticleQuery } = ArticleApi;
export const { useLazyGetArticleQuery } = ArticleApi;
