import { useEffect, useRef, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle";

import Thomas from "../../../../assets/saints/Thomas.jpg";
import Pedro from "../../../../assets/saints/Pedro.jpg";
import Estanislau from "../../../../assets/saints/Estanislau.jpg";

import * as Styled from "./styles";

export default function Saints() {
  const saintsGrifRef = useRef<HTMLDivElement>(null);
  // const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const distance = saintsGrifRef.current?.offsetTop as number;
      if (window.scrollY >= distance - 300) {
        // setActive(true);
        saintsGrifRef.current?.classList.add("active");
      }
    });
  }, []);

  return (
    <Styled.Saints>
      <Styled.Container>
        <SectionTitle title="Saiba Sobre os Santos" />
        <div ref={saintsGrifRef} className="grid">
          <Styled.Saint>
            <Styled.Poster src={Thomas} draggable={false} />
            <h3>São Thomas More</h3>
            <p>
              O que a história de um leigo que viveu há 480 anos tem a ensinar
              ao homem moderno? É a pergunta que devem fazer todos os católicos,
              ao celebrarem a memória de São Tomás More (22/06) ao qual foi
              reservado o epíteto de "o homem que não vendeu a sua alma".
            </p>
          </Styled.Saint>
          <Styled.Saint>
            <Styled.Poster src={Pedro} draggable={false} />
            <h3>São Pedro</h3>
            <p>
              Vamos olhar um pouco como São Pedro chegou a essa profissão de fé,
              e vamos também ver como era necessário ainda que São Pedro
              evoluísse e se aprofundasse nessa fé; porque, então, poderemos
              aplicar isso à nossa vida, a fim de fortalecer a nossa fé,
              aprofundá-la e crescer no caminho da santidade. Primeiro: quem era
              São Pedro?
            </p>
          </Styled.Saint>
          <Styled.Saint>
            <Styled.Poster src={Estanislau} draggable={false} />
            <h3>Santo Estanislau Kostka</h3>
            <p>
              De origem polonesa, o santo que a Igreja hoje comemora, Estanislau
              Kostka, chegou com apenas dezoitos a um grau exímio de santidade e
              amor a Jesus Cristo. Conta-se que tamanho era o seu zelo por
              guardar a pureza de coração que, ao ouvir uma conversa indecente e
              imodesta, ele não só se perturbava como podia chegar até mesmo a
              desmaiar de desgosto. O pai enviou-o para estudar a Viena,
              juntamente com o irmão mais velho, Paulo, cujos costumes devassos
              significaram-lhe um verdadeiro martírio doméstico.
            </p>
          </Styled.Saint>
        </div>
      </Styled.Container>
    </Styled.Saints>
  );
}
