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
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  padding: 20px 20px;
  background: url("/images/background.svg");
  /* background-image: cover; */

  @media (max-width: 640px) {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 25%;
  }
`;

const TopSection = styled.div`
  position: relative;
  width: 100%;
  height: 95%;
  background-color: #444444;
  border-radius: 16px;
  padding: 50px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1024px) {
    width: 100%;
    height: calc(100% - 60px);
    padding: 40px;
  }
  @media (max-width: 640px) {
    width: 100%;
    height: calc(100% - 60px);
    padding: 30px;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: calc(100% - 60px);
    padding: 20px;
  }
`;
