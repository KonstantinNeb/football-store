import React from "react";
import Article from "./Article";

export default function ArticleList({ articles }) {
  const articleElements = articles.map(articles =>
    <li key = {articles.id}><Article article = {articles}/></li>
  );
  return (
    <ul>
      {articleElements}
    </ul>
  )
}