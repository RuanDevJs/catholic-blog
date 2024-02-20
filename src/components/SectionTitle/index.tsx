import { DotsThreeOutlineVertical } from "phosphor-react";
import * as Styled from "./styles";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <Styled.Container>
      <DotsThreeOutlineVertical size={20} weight="fill" color="#FF0303" />
      <h2>{title}</h2>
    </Styled.Container>
  );
}
