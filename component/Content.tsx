import styled, { keyframes } from "styled-components";

export default function Content() {
  return (
    <Section>
      <Top>Skils and Knowledge</Top>
      <MiddleContainer>
        <MiddleLeftLine>
          <Animation />
        </MiddleLeftLine>

        <MiddleWrapper>Always Circulating,</MiddleWrapper>
        <MiddleRightLine />
      </MiddleContainer>
      <Buttom>To anyone.</Buttom>
    </Section>
  );
}

const Section = styled.section`
  position: absolute;
  width: calc(100% - 40px);
  top: 50%;
  transform: translate(0, -50%);
  color: #fff;
  font-size: 3.5rem;
  font-weight: bold;
`;

const Top = styled.div`
  display: inline-block;
  position: relative;
  left: 15.5%;
  margin: 10px 0;
`;
const MiddleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Left = keyframes`
  0% {
    width: 100%;
    background-color: #181818;
  }
 
  100%
  {
    width: 0;
    background-color: #181818;
  }
`;
const MiddleLeftLine = styled.div`
  position: relative;
  width: 15%;
  height: 2px;
  border: 0;
  outline: 0;
  margin: 0 10px 0 0;
  background-color: #fff;
`;
const Animation = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  top: -1px;
  animation: ${Left} 2s;
  z-index: 2;
`;

const MiddleWrapper = styled.div`
  width: 25%;
  display: inline-block;
`;

const right = keyframes`
0% {
  width: 0px;
    background-color: #fff;
}
100% {
  width: calc(60% - 10px);
    background-color: #fff;
}
`;
const MiddleRightLine = styled.div`
  width: calc(60% - 10px);
  height: 2px;
  background-color: #fff;
  display: inline-block;
  animation: ${right} 2s;
`;

const Buttom = styled.div`
  display: inline-block;
  position: relative;
  left: 15.5%;
  margin: 10px 0;
`;
