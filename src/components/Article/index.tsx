import { useNavigate } from "react-router-dom";
import * as Styled from "./styles";

interface IProps {
  data: {
    id: string;
    title: string;
    description: string;
    poster: string;
    tag: string;
  };
}

export default function Article({ data }: IProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/article/${data.id}`);
  }

  return (
    <Styled.Container onClick={handleClick}>
      <Styled.Image src={data.poster} draggable={false} />
      <Styled.Content>
        <span>{data.tag}</span>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </Styled.Content>
    </Styled.Container>
  );
}
