import styled from "styled-components";
import data from "../data.json";
import { useParams } from "react-router";
export default function Planet() {
  const params = useParams();
  const planetName = params.planet;

  const planet = data.find((planetObj) => planetObj.name === planetName);
  console.log(planet);
  return (
    <Main Planet={planet}>
      <img src={planet?.images.planet} alt="" />
      <p>{planet?.name}</p>
    </Main>
  );
}

const Main = styled.main<{ Planet?: { design: { overview_mobile: string } } }>`
  position: fixed;
  top: 16rem;
  img {
    width: ${(props) =>
      props.Planet &&
      props.Planet.design.overview_mobile &&
      props.Planet.design.overview_mobile};
  }
`;
