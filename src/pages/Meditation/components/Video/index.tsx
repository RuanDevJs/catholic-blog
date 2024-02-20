import { useRef, useState } from "react";
import { Pause, Play } from "phosphor-react";

import Audio from "../../../../assets/audio/audio-da-aula_1648644751.mp3";
import Poster from "../../../../assets/Poster1.jpg";

import * as Styled from "./styles";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handleClick() {
    setPlaying((oldValue) => {
      if (!oldValue) {
        videoRef.current?.play();
        return true;
      }

      videoRef.current?.pause();
      return false;
    });
  }

  return (
    <Styled.Container>
      <Styled.Player>
        <Styled.Video
          src={Audio}
          poster={Poster}
          draggable={false}
          ref={videoRef}
        />
        <Styled.Controls>
          {playing ? (
            <Pause size={22} weight="fill" onClick={handleClick} />
          ) : (
            <Play size={22} weight="fill" onClick={handleClick} />
          )}
        </Styled.Controls>
      </Styled.Player>
      <Styled.Title>
        Contra tudo e contra todos: o triunfo da Igreja Católica no Japão
      </Styled.Title>
      <Styled.Description>
        Os católicos japoneses realizaram uma das maiores façanhas da história
        da salvação: resistir por 250 anos, em isolamento total, a uma
        verdadeira campanha de aniquilação da fé.
      </Styled.Description>
      <Styled.Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic animi
        dolorum distinctio voluptatem illo asperiores suscipit, itaque cumque
        tempora labore facilis inventore omnis blanditiis, totam at similique
        doloribus fugit ut earum quas impedit aliquid ea. Ducimus quae aliquam
        dolores libero expedita deserunt, culpa maiores accusamus? Aliquam
        doloribus tenetur aperiam vel.
      </Styled.Text>
      <Styled.Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic animi
        dolorum distinctio voluptatem illo asperiores suscipit, itaque cumque
        tempora labore facilis inventore omnis blanditiis, totam at similique
        doloribus fugit ut earum quas impedit aliquid ea. Ducimus quae aliquam
        dolores libero expedita deserunt, culpa maiores accusamus? Aliquam
        doloribus tenetur aperiam vel.
      </Styled.Text>
      <Styled.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum
        debitis dignissimos aperiam amet deserunt quisquam enim rem facere ea
        explicabo rerum suscipit quibusdam, cupiditate eveniet blanditiis
        excepturi fugiat voluptatibus ad alias ipsa vitae tenetur necessitatibus
        dolorum. Repellendus iste rerum debitis voluptatum. Distinctio, sit
        mollitia natus voluptates dolore omnis optio et ratione labore cum velit
        quo, facere numquam voluptatibus tempora fugit. Dignissimos sint nobis
        suscipit illum reiciendis eligendi magnam, perferendis cupiditate
        commodi voluptates itaque doloremque temporibus, qui rem blanditiis quis
        ipsam necessitatibus autem excepturi, odio deleniti voluptatum
        reprehenderit et. Autem culpa iure explicabo eius, pariatur dignissimos.
        Necessitatibus eos qui ullam eligendi voluptatum molestiae recusandae
        repudiandae inventore magni mollitia natus molestias, impedit commodi
        officiis reiciendis facere? Eligendi laboriosam magni deserunt sit
        laudantium ex sint distinctio maiores numquam error fuga assumenda
        expedita molestias reiciendis est, modi explicabo vero nulla ad officia
        labore accusamus repellendus. Laborum recusandae ad veniam qui,
        repudiandae fugiat dolorem deserunt? Officiis possimus illo modi animi,
        optio atque? Molestiae cupiditate consequuntur voluptates a expedita sit
        neque provident temporibus aut. Temporibus ea ut sit eaque similique
        porro incidunt deserunt tenetur labore consequuntur, nihil, ipsa
        accusamus enim tempora quidem deleniti obcaecati vitae a sed dignissimos
        laboriosam quo ad. Saepe cum, quidem dolor, ratione harum asperiores
        eligendi tempore sed omnis recusandae, ipsum sit. Quaerat, magni? Quia
        temporibus consequuntur recusandae. Voluptatem aspernatur optio
        quisquam.
      </Styled.Text>
      <Styled.List>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis
          quis labore alias earum sapiente non eum placeat explicabo! Minus!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis
          quis labore alias earum sapiente non eum placeat explicabo! Minus!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis
          quis labore alias earum sapiente non eum placeat explicabo! Minus!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero
          nemo quam sed repudiandae ?
        </li>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          eius modi doloribus ab eos ?
        </li>
      </Styled.List>
    </Styled.Container>
  );
}
