import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";
// import Planet from "./Planet";
export default function Header() {
  const [show, setShow] = useState<boolean>(false);

  const handleHamburgerClick = () => {
    console.log("clicked");
    setShow(!show);
  };

  return (
    <HeaderDiv>
      {" "}
      <h1>THE PLANETS</h1>
      <button onClick={handleHamburgerClick}>
        <img src="/assets/icon-hamburger.svg" alt="icon-hamburger" />
      </button>
      <NavContainer show={show}>
        <ul>
          {data.map((planet, index) => (
            <Li key={index} Planet={planet}>
              <div className="nav-circle">
                <div className="Circles"></div>
                <Link to={`/${planet.name}`}>{planet.name}</Link>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  padding: 0 2rem;
  @media screen and (min-width: 1024px) {
    justify-content: center;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;

    @media screen and (max-width: 1024px) {
      visibility: visible;
      opacity: 1;
    }
    @media screen and (max-width: 1024px) {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const NavContainer = styled.nav<{ show: boolean }>`
  position: fixed;
  top: 50px;
  left: 0;
  height: 90vh;
  width: 100%;

  gap: 1.5rem;
  transition: 1s;
  transform: ${(props) => (!props.show ? "translateY(-100vh)" : "none")};
  @media screen and (min-width: 1440px) {
    /* position: static;
     */
    all: unset;
  }
  & > ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 6rem;
    margin-left: 3rem;
    background: #070724;
    @media screen and (min-width: 1025px) {
      flex-direction: row;
    }
    .nav-circle {
      display: flex;
      align-items: center;
      gap: 3rem;
    }
  }
`;
const Li = styled.li<{ Planet: { design: { color: string } } }>`
  color: #fff;
  text-align: start;
  list-style: none;
  font-size: 15px;
  /* padding: 3rem; */
  padding-left: 5rem;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.364px;
  text-transform: uppercase;
  border-bottom: 1px solid gray;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  .Circles {
    visibility: visible;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.Planet && props.Planet.design && props.Planet.design.color};
    @media screen and (min-width: 1025px) {
      visibility: hidden;
    }
  }
  .arrow {
    @media screen and (min-width: 1025px) {
      visibility: hidden;
    }
  }
`;
