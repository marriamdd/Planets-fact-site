import styled from "styled-components";
export default function AdditionalContent({
  viewOption,
  setViewOption,
}: {
  viewOption: string | undefined;
  setViewOption: (option: string) => void;
}) {
  const additionalArray = ["overview", "structure", "geology"];
  // const handleViewOptionClick=()=>{

  // }
  console.log(viewOption);
  return (
    <Additional>
      {additionalArray.map((currentOption, index) => (
        <span onClick={() => setViewOption(currentOption)}>
          {currentOption}
        </span>
      ))}
    </Additional>
  );
}

const Additional = styled.div`
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
`;
