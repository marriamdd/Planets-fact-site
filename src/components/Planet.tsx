import styled from "styled-components";
import data from "../data.json";
import { useParams } from "react-router";
import { IViewOptions } from "../App";
export default function Planet({
  viewOption,
  setViewOption,
}: {
  viewOption: IViewOptions;
  setViewOption: (option: IViewOptions) => void;
}) {
  const params = useParams();
  const planetName = params.planet;

  const planet = data.find((planetObj) => planetObj.name === planetName);
  console.log(planet);
  return (
    <Main Planet={planet}>
      <img
        className="planet_img"
        src={
          (viewOption.structure && planet?.images.internal) ||
          (viewOption.surface && planet?.images.geology) ||
          planet?.images.planet
        }
        alt=""
      />
      <h1>{planet?.name}</h1>
      <div>
        <p className="overview_content">
          {(viewOption.structure && planet?.structure.content) ||
            (viewOption.surface && planet?.geology.content) ||
            planet?.overview.content}
        </p>
        <p className="sorce_P">
          Source : <a href={planet?.overview.source}>Wikipedia</a>{" "}
          <img src="public/assets/icon-source.svg" alt="icon-source" />
        </p>
      </div>
      <div className="quicInfoContainer">
        <div>
          <p>ROTATION TIME</p>
          <span>{planet?.rotation}</span>
        </div>
        <div>
          <p>REVOLUTION TIME</p>
          <span>{planet?.revolution}</span>
        </div>
        <div>
          <p>radius</p>
          <span>{planet?.radius}</span>
        </div>
        <div>
          <p>AVERAGE TEMP.</p>
          <span>{planet?.temperature}</span>
        </div>
      </div>
    </Main>
  );
}

const Main = styled.main<{ Planet?: { design: { overview_mobile: string } } }>`
  margin-block: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 2rem;
  gap: 1rem;
  .overview_content {
    color: #fff;
    text-align: center;

    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
  .planet_img {
    width: ${(props) =>
      props.Planet &&
      props.Planet.design.overview_mobile &&
      props.Planet.design.overview_mobile};
  }
  & > h1 {
    margin-top: 7rem;
    text-align: center;
    font-size: 40px;
    font-weight: 400;
    text-transform: uppercase;
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    text-align: center;
    .sorce_P {
      opacity: 0.5;
      color: #fff;

      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 25px;
      & > a {
        text-decoration-line: underline;
      }
    }
  }
  .quicInfoContainer {
    & > div {
      width: 327px;
      height: 48px;
      flex-shrink: 0;
      display: flex;
      border: 1px solid #fff;
      justify-content: space-around;
      align-items: center;
      & > p {
        color: #fff;
        font-family: Spartan;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px; /* 200% */
        letter-spacing: 0.727px;
        text-transform: uppercase;
        opacity: 0.2;
      }
      & > span {
        color: #fff;
        text-align: right;
        font-family: Antonio;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.75px;
        text-transform: uppercase;
      }
    }
  }
`;
