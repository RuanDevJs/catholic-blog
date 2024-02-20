import News from "./components/News";
import Intro from "./components/Intro";
import Saints from "./components/Saints";

import * as Styled from "./styles";

export default function Home() {
  return (
    <Styled.Container>
      <Intro />
      <News />
      <Saints />
    </Styled.Container>
  );
}
