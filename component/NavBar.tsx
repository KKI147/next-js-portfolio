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
        {/* <Link href={"exp"}>
          {router.pathname === "/exp" ? (
            <Locate>Exp, Storage.</Locate>
          ) : (
            <Text>Exp, Storage.</Text>
          )}
        </Link> */}
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
  @media (max-width: 1024px) {
    position: absolute;
    width: calc(100% - 40px);
    height: 5%;
    font-size: 1.2rem;
  }
  @media (max-width: 640px) {
    width: calc(100% - 60px);
    padding: 0 10px;
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    width: calc(100% - 50px);
    padding: 0 5px;
    font-size: 0.8rem;
  }
`;

const LinkBox = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 15px;
  bottom: 30px;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    top: 0;
    bottom: 0px;
  }
  @media (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    top: 0;
    bottom: 0px;
  }
`;
const hover = (fullWidth: string) => keyframes`

0% {
  width: 0px;
    
}
100% {
  width: ${fullWidth};
  
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
      width: 10%;
      top: 12px;
      margin: 0 0 0 20px;
      content: "";
      border-top: 1px solid #fff;
      animation: ${hover("10%")} 0.5s;
    }
  }

  @media (max-width: 1024px) {
    margin: 0px 50px;

    ::after {
      width: 40px;
      top: 10px;
    }
  }
  @media (max-width: 640px) {
    margin: 0px 20px;

    ::after {
      margin: 0 0 0 15px;
      width: 30px;
      top: 8px;
      animation: ${hover("30px")} 0.5s;
    }
  }

  @media (max-width: 480px) {
    margin: 0px 10px;
    ::after {
      margin: 0 0 0 10px;
      width: 20px;
      top: 6px;
      animation: ${hover("20px")} 0.5s;
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
    width: 10%;
    top: 12px;
    margin: 0 0 0 20px;
    content: "";
    border-top: 1px solid #fff;
  }

  @media (max-width: 1024px) {
    margin: 0px 50px;
    ::after {
      width: 40px;
      top: 10px;
    }
  }
  @media (max-width: 640px) {
    margin: 0px 20px;
    ::after {
      width: 30px;
      top: 8px;
      margin: 0 0 0 15px;
    }
  }
  @media (max-width: 480px) {
    margin: 0px 10px;
    ::after {
      width: 20px;
      top: 6px;
      margin: 0 0 0 10px;
    }
  }
`;
