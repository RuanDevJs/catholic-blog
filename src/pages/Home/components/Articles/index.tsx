import Article from "../../../../components/Article";
import articles from "../../../../services/articles";
import * as Styled from "./styles";

export default function Articles() {
  return (
    <Styled.Container>
      {articles.map((article, index) => (
        <Article data={article} key={index} />
      ))}
    </Styled.Container>
  );
}
