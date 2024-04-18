import styled from "styled-components";
import data from "../data.json";
import { useParams } from "react-router";
import AdditionalContent from "./AdditionalContent";

export default function Planet({
  viewOption,
  setViewOption,
  isTablet,

  show,
}: {
  viewOption: string | undefined;
  setViewOption: (option: string) => void;
  isTablet: boolean;
  isMobile: boolean;
  isDesktop: boolean;
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
              (viewOption === "geology" && planet?.images.planet) ||
              planet?.images.planet
            }
            alt="planet_img"
          />
          {viewOption === "geology" && (
            <img
              className="pointer_img"
              src={planet?.images.geology}
              alt="pointer img"
            />
          )}
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
  Planet?: {
    design: {
      overview_mobile: string;
      overview_tablet: string;
      overview_desktop: string;
    };
  };
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
    text-align: start;
    word-wrap: normal;
    margin-top: 3rem;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;

    width: 32.7rem;

    height: 110px;
    font-size: 11px;
    @media screen and (min-width: 768px) {
      width: 33.9rem;

      height: 110px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 14px;
      width: 350px;

      height: 150px;
      line-height: 25px;
    }
  }
  .planet_img {
    position: relative;
    width: ${(props) =>
      props.Planet &&
      props.Planet.design.overview_mobile &&
      props.Planet.design.overview_mobile};
    transition: 1s;
    @media screen and (min-width: 768px) {
      margin: 3rem;
      width: ${(props) =>
        props.Planet &&
        props.Planet.design.overview_tablet &&
        props.Planet.design.overview_tablet};
      transition: 1s;
    }
    @media screen and (min-width: 1440px) {
      width: ${(props) =>
        props.Planet &&
        props.Planet.design.overview_desktop &&
        props.Planet.design.overview_desktop};
      transition: 1s;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;

    text-align: center;
    align-items: center;
    .sorce_P {
      opacity: 0.5;
      color: #fff;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2.5rem;
      @media screen and (min-width: 1440px) {
        margin-top: 1rem;
        font-size: 1.4rem;
      }
      & > a {
        text-decoration-line: underline;
      }
    }
  }
  .quicInfoContainer {
    margin-top: 3rem;
    gap: 1.5rem;
    @media screen and (min-width: 768px) {
      grid-column-start: 3;
      grid-column-end: 1;
      margin-top: 10rem;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
    }
    @media screen and (min-width: 1440px) {
      gap: 3rem;
    }
    & > div {
      width: 32.7rem;
      height: 4.8rem;
      display: flex;
      border: 1px solid rgba(255, 255, 255, 0.2);

      justify-content: space-around;
      align-items: center;
      @media screen and (min-width: 768px) {
        min-width: 17rem;
        width: 25.5rem;
        height: 8.8rem;
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
        line-height: 1.6rem;
        letter-spacing: 0.727px;
        text-transform: uppercase;
        opacity: 0.2;
      }
      & > span {
        color: #fff;
        text-align: right;

        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.75px;
        text-transform: uppercase;
        @media screen and (min-width: 768px) {
          font-size: 2.4rem;
          letter-spacing: -0.9px;
          text-transform: uppercase;
        }
      }
    }
  }
  .planetImg_div {
    position: relative;
    .pointer_img {
      width: 8rem;

      position: absolute;
      bottom: -5rem;
      @media screen and (min-width: 768px) {
        width: 12rem;
        bottom: -6rem;
      }
      @media screen and (min-width: 1440px) {
        width: 16.3rem;
        height: 19.9rem;
      }
    }
    @media screen and (min-width: 768px) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    @media screen and (min-width: 1440px) {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }

  .storyContent {
    margin-top: 7rem;
    @media screen and (min-width: 768px) {
      h1 {
        text-align: center;
        font-size: 4rem;
        font-weight: 400;
        text-transform: uppercase;
        margin: 0px;
        margin-bottom: 1.5rem;

        @media screen and (min-width: 768px) {
          margin-bottom: 3rem;
        }
        @media screen and (min-width: 1440px) {
          margin-bottom: 3rem;
        }
      }
    }
  }
`;
