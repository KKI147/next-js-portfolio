import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const ref = useRouter();
  console.log(ref);
  return (
    <Section>
      <LinkBox>
        <Link href={"/education"}>
          <Text>Home</Text>
        </Link>
        <Link href={"/education"}>
          <Text>Education</Text>
        </Link>
        <Link href={"/skils"}>
          <Text>Skils</Text>
        </Link>
        <Link href={"/projects"}>
          <Text>Projects</Text>
        </Link>
        <Link href={"exp"}>
          <Text>Exp, Storage.</Text>
        </Link>
      </LinkBox>
      <CopyLight>
        <div>© Copyright 2023. Made by Kim kyeong il</div>
      </CopyLight>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  padding: 0 20px 20px;
  bottom: 0%;
  font-size: 1.5rem;
  color: #fff;
`;

const LinkBox = styled.div`
  padding: 0 0 20px 20px;
`;

const Text = styled.div`
  color: #888888;
  margin: 0 0 15px 0;
`;

const CopyLight = styled.div`
  position: absolute;
  bottom: 5%;
  left: 85%;
  padding: 0 20px 20px 0;
  font-size: 1rem;
`;
