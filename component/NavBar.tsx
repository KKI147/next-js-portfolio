import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <Section>
      <LinkBox>
        <Link href={"/"}>
          {router.pathname === "/" ? <Locate>Home</Locate> : <Text>Home</Text>}
        </Link>
        <Link href={"/education"}>
          {router.pathname === "/education" ? (
            <Locate>Education</Locate>
          ) : (
            <Text>Education</Text>
          )}
        </Link>
        <Link href={"/skils"}>
          {router.pathname === "/skils" ? (
            <Locate>Skils</Locate>
          ) : (
            <Text>Skils</Text>
          )}
        </Link>
        <Link href={"/projects"}>
          {router.pathname === "/projects" ? (
            <Locate>Projects</Locate>
          ) : (
            <Text>Projects</Text>
          )}
        </Link>
        <Link href={"exp"}>
          {router.pathname === "/exp" ? (
            <Locate>Exp, Storage.</Locate>
          ) : (
            <Text>Exp, Storage.</Text>
          )}
        </Link>
      </LinkBox>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  position: relative;
  width: 15%;
  height: calc(100vh - 40px);
  font-size: 1.5rem;
  color: #fff;
`;

const LinkBox = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 15px;
  bottom: 30px;
`;
const hover = keyframes`
0% {
  width: 0px;
    
}
100% {
  width: 40px;
  
}
`;
const Text = styled.div`
  position: relative;
  color: #888888;
  margin: 0 0 15px 0;
  :hover {
    color: #fff;
    ::after {
      position: absolute;
      display: inline-block;
      width: 40px;
      top: 12px;
      margin: 0 0 0 20px;
      content: "";
      border-top: 1px solid #fff;
      animation: ${hover} 0.5s;
    }
  }
`;

const Locate = styled.div`
  position: relative;
  color: #fff;
  margin: 0 0 15px 0;
  ::after {
    position: absolute;
    display: inline-block;
    width: 40px;
    top: 12px;
    margin: 0 0 0 20px;
    content: "";
    border-top: 1px solid #fff;
  }
`;
