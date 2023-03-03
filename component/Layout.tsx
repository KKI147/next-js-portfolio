import styled from "styled-components";
import { PropsWithChildren } from "react";
import NavBar from "./NavBar";

interface LayoutProps {}
export default function Layout({ children }: PropsWithChildren<LayoutProps>) {
  return (
    <LayoutComponent>
      <Content />
      <NavBar />
      {children}
    </LayoutComponent>
  );
}

const LayoutComponent = styled.div`
  position: relative;
  height: 100vh;
  background: url("/images/polygon.png");
  background-repeat: no-repeat;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 0;
  border-top: 1px solid #cdcdcd;
  ::before {
    position: absolute;
    width: calc(30% - 30px);
    top: -100px;
    left: 10%;
    background-color: #212121;
    word-break: keep-all;
    font-size: 3.5rem;
    content: "Skils and Knowledge Always Circulating, To anyone.";
    font-weight: 500;
    color: #fff;
    padding: 0 15px;
  }
`;
