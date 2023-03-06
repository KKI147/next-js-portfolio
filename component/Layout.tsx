import styled from "styled-components";
import { PropsWithChildren } from "react";
import NavBar from "./NavBar";
import Content from "./Content";
import Footer from "./Footer";
import Wrapper from "./Wrapper";
import { useRouter } from "next/router";

interface LayoutProps {}

export default function Layout({ children }: PropsWithChildren<LayoutProps>) {
  const router = useRouter();
  return (
    <LayoutComponent>
      <NavBar />
      {router.pathname === "/" ? (
        <>
          {children}
          <Footer />
        </>
      ) : (
        <Wrapper>
          <TopSection>{children}</TopSection>
          <Footer />
        </Wrapper>
      )}
    </LayoutComponent>
  );
}

const LayoutComponent = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  padding: 20px 20px;
  background: url("/images/background.svg");
`;

const TopSection = styled.div`
  position: relative;
  width: 100%;
  height: 95%;
  background-color: #444444;
  border-radius: 16px;
  padding: 50px 50px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const HomePage = styled.div`
  position: relative;
  width: 100%;
  height: 95%;
  background-color: transparent;
  border-radius: 16px;
`;
