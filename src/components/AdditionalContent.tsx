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
  //   console.log(currentPlanet.name);
  console.log(viewOption);

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
    display: none;
  }
  & > span {
    cursor: pointer;
    text-align: center;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1.929px;
    text-transform: uppercase;
    padding-bottom: 2rem;
  }
  & > span.active {
    border-bottom: ${(props) =>
      `3px solid ${props.currentPlanet?.design?.color}`};
  }
`;
