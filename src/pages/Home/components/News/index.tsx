import SectionTitle from "../../../../components/SectionTitle";

import Articles from "../Articles";
import Post from "../Poster";

import * as Styled from "./styles";

export default function News() {
  return (
    <Styled.Container>
      <SectionTitle title="ARTIGOS E NOTÍCIAS" />
      <Styled.Grid>
        <Articles />
        <Post />
      </Styled.Grid>
    </Styled.Container>
  );
}
