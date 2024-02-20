import { useEffect } from "react";
import * as Styled from "./styles";

import articles from "../../../../services/articles";

export default function Recomendations() {
  useEffect(() => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);

  return (
    <Styled.Container>
      {articles.map((article) => {
        return (
          <Styled.Article>
            <img src={article.poster} />
            <h1>{article.title}</h1>
            <p>{article.description}</p>
          </Styled.Article>
        );
      })}
    </Styled.Container>
  );
}
