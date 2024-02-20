import Article from "./components/Recomendations";
import Video from "./components/Video";
import * as Styled from "./styles";

export default function Meditation() {
  return (
    <Styled.Background>
      <Styled.Container className="video">
        <Video />
        <Article />
      </Styled.Container>
    </Styled.Background>
  );
}
