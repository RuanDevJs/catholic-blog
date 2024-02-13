import * as Styled from "./styles";

interface IProps {
  data: {
    title: string;
    description: string;
    poster: string;
    tag: "SANTOS & MÁRTIRES" | "ESPIRITUALIDADE" | "HISTÓRIA DA IGREJA";
  };
}

export default function Article({ data }: IProps) {
  return (
    <Styled.Container>
      <Styled.Image src={data.poster} draggable={false} />
      <Styled.Content>
        <span>{data.tag}</span>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </Styled.Content>
    </Styled.Container>
  );
}
