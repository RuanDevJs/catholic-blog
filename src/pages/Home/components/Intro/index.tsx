import { MonitorPlay } from "phosphor-react";
import * as Styled from "./styles";

export default function Intro() {
  return (
    <Styled.Container className="container">
      <Styled.Info>
        <div>
          <Styled.Tag>Curso de férias</Styled.Tag>
          <Styled.Title>“As Navegações Portuguesas”</Styled.Title>
          <Styled.Description>
            Entre os extremos da crítica marxista e da idealização ufanista,
            está “sepultada” uma verdade histórica que precisamos conhecer! Este
            curso irá nos ajudar a redescobrir nossas raízes, para nos
            reconciliarmos com nosso passado.
          </Styled.Description>
        </div>
        <Styled.Link href="#">
          <MonitorPlay color="#FF0303" size={20} />
          Ouvir Meditação
        </Styled.Link>
      </Styled.Info>
    </Styled.Container>
  );
}
