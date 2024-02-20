import { Play } from "phosphor-react";

import Missa from "../../../../assets/Missa.jpg";
import Poster1 from "../../../../assets/Poster1.jpg";

import * as Styled from "./styles";
import { Link } from "react-router-dom";

export default function Poster() {
  return (
    <Styled.Container>
      <Styled.Poster>
        <Styled.Image src={Poster1} draggable={false} />
        <Styled.Player>
          <h2>A verdadeira missionariedade da Igreja</h2>
          <p>Memória de São Paulo Miki e seus companheiros mártires.</p>
          <Styled.Play>
            <Play size={20} weight="fill" />
            <Link to="/meditation">Ouvir meditação</Link>
          </Styled.Play>
        </Styled.Player>
      </Styled.Poster>
      <Styled.Poster>
        <Styled.Image
          src={Missa}
          draggable={false}
          style={{ borderRadius: "8px 8px 0 0", marginTop: "2rem" }}
        />
        <Styled.Player style={{ height: "auto" }}>
          <h2>
            “A Santa Missa é a chave <br /> de ouro do Paraíso.”
          </h2>
          <p>- São Leonardo de Porto Maurício -</p>
        </Styled.Player>
      </Styled.Poster>
    </Styled.Container>
  );
}
