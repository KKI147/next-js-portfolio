import styled from "styled-components";
import Footer from "./Footer";

export default function Wrapper({ children }: any) {
  return <Section>{children}</Section>;
}

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
