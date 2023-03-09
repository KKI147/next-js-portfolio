import styled from "styled-components";

export default function Wrapper({ children }: any) {
  return <Section>{children}</Section>;
}

const Section = styled.div`
  position: relative;
  width: 85%;
  height: 100%;
  @media (max-width: 1024px) {
    position: absolute;
    width: calc(100% - 40px);
    height: calc(95% - 40px);
    top: calc(36px + 5%);
  }
  @media (max-width: 1024px) {
    position: absolute;
    width: calc(100% - 40px);
    height: calc(95% - 56px);
    top: calc(36px + 5%);
  }
`;
