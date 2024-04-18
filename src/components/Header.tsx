import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";
import AdditionalContent from "./AdditionalContent";

export default function Header({
  viewOption,
  setViewOption,
  isMobile,
  show,
  setShow,
}: {
  viewOption: string | undefined;
  setViewOption: (option: string) => void;
  isMobile: boolean;
  show: boolean;
  setShow: (show: boolean) => void;
}) {
  const handleHamburgerClick = () => {
    setShow(!show);
  };

  return (
    <HeaderDiv>
      <div className="headerDiv">
        <h1>THE PLANETS</h1>
        <button onClick={handleHamburgerClick}>
          <img src="/assets/icon-hamburger.svg" alt="icon-hamburger" />
        </button>
      </div>
      {isMobile && (
        <AdditionalContent
          viewOption={viewOption}
          setViewOption={setViewOption}
        />
      )}

      <NavContainer show={show}>
        <ul>
          {data.map((planet, index) => (
            <Li key={index} Planet={planet}>
              <div className="nav-circle">
                <div className="circles"></div>
                <Link onClick={handleHamburgerClick} to={`/${planet.name}`}>
                  {planet.name}
                </Link>
              </div>

              <span className="arrow">
                <img src="/assets/Path 3.svg" alt="arrow" />
              </span>
            </Li>
          ))}
        </ul>
      </NavContainer>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.header`
  .headerDiv {
    display: flex;
    justify-content: space-between;
    padding: 2rem 3rem 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    @media screen and (min-width: 768px) {
      justify-content: center;
      border: none;
      transition: 1s;
    }
  }
  .headerDiv h1 {
    color: #fff;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: -1.05px;
    text-transform: uppercase;
  }
  .headerDiv button {
    border: none;
    background: transparent;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

const NavContainer = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "flex" : "none")};
  transform: ${(props) => (!props.show ? "translateX(-1000vh)" : "none")};
  position: absolute;
  z-index: 9999;
  height: 100vh;
  width: 100%;
  top: 8rem;
  @media screen and (min-width: 768px) {
    display: flex;

    transform: none;
    height: 10vh;
    transition: 1s;
  }
  & > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.3rem;
    width: 100%;
    padding: 2rem;

    background-color: #070724;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      gap: 0;
      transition: 1s;
    }
  }
`;

const Li = styled.li<{ Planet: { design: { color: string } } }>`
  display: flex;
  justify-content: space-between;
  width: 100%;

  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.364px;
  text-transform: uppercase;
  padding-bottom: 1.5rem;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;

  .nav-circle {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .circles {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.Planet && props.Planet.design && props.Planet.design.color};
    @media screen and (min-width: 768px) {
      display: none;
      transition: 1s;
    }
  }
  .arrow {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
