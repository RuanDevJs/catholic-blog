import { useParams } from "react-router-dom";
import articles from "../../services/articles";

import * as Styled from "./styles";
import { useEffect } from "react";

export default function Article() {
  const articleId = useParams().id;
  const findData = articles.find((article) => article.id === articleId);

  useEffect(() => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);

  return (
    <Styled.Background>
      <Styled.Container>
        <Styled.Heading>
          <Styled.Tag>{findData?.tag}</Styled.Tag>
          <Styled.Title>{findData?.title}</Styled.Title>
          <Styled.Description>{findData?.description}</Styled.Description>
        </Styled.Heading>
        <Styled.Content>
          <Styled.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Styled.Text>
          <Styled.Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </Styled.Text>
          <Styled.List>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              aliquam necessitatibus iusto!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              aliquam necessitatibus iusto!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              aliquam necessitatibus iusto!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              aliquam necessitatibus iusto!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              aliquam necessitatibus iusto!
            </li>
          </Styled.List>
          <Styled.Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC.
          </Styled.Text>
          <Styled.List>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              dolor fugiat nisi earum similique dolorum facilis! Laborum,
              distinctio consectetur tenetur veritatis atque ducimus corrupti
              adipisci fuga dolore, molestias expedita eaque corporis impedit.
            </li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          </Styled.List>
          <Styled.Text>
            This book is a treatise on the theory of ethics, very popular during
            the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
            sit amet..", comes from a line in section 1.10.32. The standard
            chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
            Bonorum et Malorum" by Cicero are also reproduced in their exact
            original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </Styled.Text>
        </Styled.Content>
      </Styled.Container>
    </Styled.Background>
  );
}
