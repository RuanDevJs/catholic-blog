import { DotsThreeOutlineVertical, MonitorPlay, Play } from "phosphor-react";
import Article from "../../components/Article";

import articles from "../../services/articles";
import Missa from "../../assets/Missa.jpg";

import Poster1 from "../../assets/Poster1.jpg";
import * as Styled from "./styles";

export default function Home() {
  return (
    <>
      <Styled.Background className="container">
        <Styled.Info>
          <div>
            <Styled.Tag>Curso de férias</Styled.Tag>
            <Styled.Title>“As Navegações Portuguesas”</Styled.Title>
            <Styled.Description>
              Entre os extremos da crítica marxista e da idealização ufanista,
              está “sepultada” uma verdade histórica que precisamos conhecer!
              Este curso irá nos ajudar a redescobrir nossas raízes, para nos
              reconciliarmos com nosso passado.
            </Styled.Description>
          </div>
          <Styled.Link href="#">
            <MonitorPlay color="#FF0303" size={20} />
            Ouvir Meditação
          </Styled.Link>
        </Styled.Info>
      </Styled.Background>
      <Styled.News>
        <Styled.NewsHeading>
          <DotsThreeOutlineVertical size={20} weight="fill" color="#FF0303" />
          <h2>ARTIGOS E NOTÍCIAS</h2>
        </Styled.NewsHeading>
        <Styled.Grid>
          <Styled.Articles>
            {articles.map((article) => (
              <Article data={article} />
            ))}
          </Styled.Articles>
          <Styled.Post>
            <Styled.Poster>
              <Styled.PosterImage src={Poster1} draggable={false} />
              <Styled.PosterPlayer>
                <h2>A verdadeira missionariedade da Igreja</h2>
                <p>Memória de São Paulo Miki e seus companheiros mártires.</p>
                <Styled.Player>
                  <Play size={20} weight="fill" />
                  <span>Ouvir meditação</span>
                </Styled.Player>
              </Styled.PosterPlayer>
            </Styled.Poster>
            <Styled.Poster>
              <Styled.PosterImage
                src={Missa}
                draggable={false}
                style={{ borderRadius: "8px 8px 0 0", marginTop: "2rem" }}
              />
              <Styled.PosterPlayer style={{ height: "auto" }}>
                <h2>
                  “A Santa Missa é a chave <br /> de ouro do Paraíso.”
                </h2>
                <p>- São Leonardo de Porto Maurício -</p>
              </Styled.PosterPlayer>
            </Styled.Poster>
          </Styled.Post>
        </Styled.Grid>
      </Styled.News>
    </>
  );
}
