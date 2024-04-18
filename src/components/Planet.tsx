import styled from "styled-components";
import data from "../data.json";
import { useParams } from "react-router";
import AdditionalContent from "./AdditionalContent";

export default function Planet({
  viewOption,
  setViewOption,
  isTablet,
  isMobile,
  show,
}: {
  viewOption: string | undefined;
  setViewOption: (option: string) => void;
  isTablet: boolean;
  isMobile: boolean;
  show: boolean;
}) {
  const params = useParams();
  const planetName = params.planet;

  const planet = data.find((planetObj) => planetObj.name === planetName);
  return (
    <>
      <Main Planet={planet}>
        <div className="planetImg_div">
          <img
            className="planet_img"
            src={
              (viewOption === "structure" && planet?.images.internal) ||
              (viewOption === "geology" && planet?.images.geology) ||
              planet?.images.planet
            }
            alt="planet_img"
          />
        </div>

        <div className="storyContent">
          <h1>{planet?.name}</h1>
          <p className="overview_content">
            {(viewOption === "structure" &&
              planet?.viewOption.structure.content) ||
              (viewOption === "geology" &&
                planet?.viewOption.geology.content) ||
              planet?.viewOption.overview.content}
          </p>
          <p className="sorce_P">
            Source : <a href={planet?.viewOption.overview.source}>Wikipedia</a>{" "}
            <img src="public/assets/icon-source.svg" alt="icon-source" />
          </p>
        </div>
        {isTablet && (
          <AdditionalContent
            viewOption={viewOption}
            setViewOption={setViewOption}
          />
        )}
        {show ? (
          ""
        ) : (
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
        )}
      </Main>
    </>
  );
}
const Main = styled.main<{
  Planet?: { design: { overview_mobile: string; overview_tablet: string } };
}>`
  margin-block: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 4rem;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .overview_content {
    color: #fff;
    text-align: center;
    word-wrap: normal;
    max-width: 550px;
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
    transition: 1s;
    @media screen and (min-width: 768px) {
      width: ${(props) =>
        props.Planet &&
        props.Planet.design.overview_tablet &&
        props.Planet.design.overview_tablet};
      transition: 1s;
    }
  }
  & > div h1 {
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
    align-items: center;
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
    @media screen and (min-width: 768px) {
      grid-column-start: 3;
      grid-column-end: 1;

      flex-direction: row;
      justify-content: center;
    }
    & > div {
      width: 327px;
      height: 48px;
      display: flex;
      border: 1px solid rgba(255, 255, 255, 0.2);

      justify-content: space-around;
      align-items: center;
      @media screen and (min-width: 768px) {
        min-width: 170px;
        width: 255px;
        height: 88px;
        flex-direction: column;
        align-items: start;
        padding-left: 1rem;
        justify-content: space-evenly;
      }

      & > p {
        color: #fff;

        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0.727px;
        text-transform: uppercase;
        opacity: 0.2;
      }
      & > span {
        color: #fff;
        text-align: right;

        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.75px;
        text-transform: uppercase;
        @media screen and (min-width: 768px) {
          font-size: 24px;
          letter-spacing: -0.9px;
          text-transform: uppercase;
        }
      }
    }
  }
  .planetImg_div {
    @media screen and (min-width: 768px) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  .storyContent {
    @media screen and (min-width: 768px) {
      p {
        width: 33.9rem;
        font-size: 11px;
      }
    }
  }
`;
