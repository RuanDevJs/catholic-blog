import { List } from "phosphor-react";
import * as Styled from "./styles";

export default function Header() {
  return (
    <Styled.Background>
      <Styled.Container>
        <Styled.Menu>
          <List size={24} color="#fff" weight="bold" />
          <Styled.Text>MENU</Styled.Text>
        </Styled.Menu>
        <Styled.Title to="/">Christo Nihil Praeponere</Styled.Title>
        <Styled.RightMenu style={{ gap: "2rem" }}>
          <Styled.Text>INSCREVER-SE</Styled.Text>
          <Styled.Text>ENTRAR</Styled.Text>
        </Styled.RightMenu>
      </Styled.Container>
    </Styled.Background>
  );
}
