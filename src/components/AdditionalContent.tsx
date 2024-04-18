import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Data from "../data.json";

interface ICurrentPlanet {
  name: string;
  viewOption: {
    overview: {
      content: string;
      source: string;
    };
    structure: {
      content: string;
      source: string;
    };
    geology: {
      content: string;
      source: string;
    };
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images?: {
    content?: string;
  };
  design:
    | {
        color: string;
        overview_mobile: string;
        overview_tablet: string;
      }
    | undefined;
}

export default function AdditionalContent({
  viewOption,
  setViewOption,
}: {
  viewOption: string | undefined;
  setViewOption: (option: string) => void;
}) {
  const additionalArray = ["overview", "structure", "geology"];
  let location = useLocation();
  let endPoint = location.pathname.replace("/", "");

  let currentPlanet = Data.find((current) => current.name === endPoint);

  return (
    <Additional currentPlanet={currentPlanet} viewOption={viewOption}>
      {additionalArray.map((currentOption, index) => (
        <span
          onClick={() => setViewOption(currentOption)}
          key={index}
          className={currentOption === viewOption ? "active" : ""}
        >
          {currentOption}
        </span>
      ))}
    </Additional>
  );
}

const Additional = styled.div<{
  currentPlanet?: Partial<ICurrentPlanet>;
  viewOption?: string | undefined;
}>`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 2rem 3rem 0rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  @media screen and (min-width: 768px) {
    border-bottom: none;
    padding: 0rem;
    height: 234px;
    justify-content: center;
    padding-top: 3rem;
  }
  & > span {
    cursor: pointer;
    text-align: center;
    position: relative;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1.929px;
    text-transform: uppercase;
    padding-bottom: 2rem;
    @media screen and (min-width: 768px) {
      width: 281px;
      height: 40px;
      padding-top: 1.5rem;
    }
    @media screen and (min-width: 1440px) {
      width: 350px;
      height: 48px;
      color: #fff;

      font-size: 12px;
      line-height: 25px;
      letter-spacing: 2.571px;

      &:nth-child(1)::before {
        content: "01";
        opacity: 0.5;
        position: absolute;
        left: 2.8rem;
      }

      &:nth-child(2)::before {
        content: "02";
        opacity: 0.5;
        position: absolute;
        left: 2.8rem;
      }

      &:nth-child(3)::before {
        content: "03";
        opacity: 0.5;
        position: absolute;
        left: 2.8rem;
      }
    }
  }

  & > span.active {
    border-bottom: ${(props) =>
      `3px solid ${props.currentPlanet?.design?.color}`};
    @media screen and (min-width: 768px) {
      width: 281px;
      height: 40px;
      flex-shrink: 0;
      border-bottom: none;
      background-color: ${(props) => props.currentPlanet?.design?.color};
      @media screen and (min-width: 1440px) {
        width: 350px;
        height: 48px;
      }
    }
  }
`;
