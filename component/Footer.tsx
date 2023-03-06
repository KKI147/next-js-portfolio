import styled, { css } from "styled-components";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <>
      {router.pathname === "/" ? (
        <CopyLight variant="home">
          <Text>© Copyright 2023. Made by Kim kyeong il</Text>
        </CopyLight>
      ) : (
        <CopyLight variant="page">
          <Text>© Copyright 2023. Made by Kim kyeong il</Text>
        </CopyLight>
      )}
    </>
  );
}

interface CssType {
  variant: string;
}

const CopyLight = styled.div`
  ${({ variant }: CssType) => {
    switch (variant) {
      case "page":
        return css`
          position: absolute;
          width: 100%;
          height: 5%;
          padding: 15px 5px;
          font-size: 1rem;
          color: #fff;
        `;
      case "home":
        return css`
          position: absolute;
          width: calc(100% - 30px);
          height: 5%;
          padding: 15px 5px;
          font-size: 1rem;
          color: #fff;
          bottom: 0;
        `;
      default:
        break;
    }
  }}
`;

const Text = styled.div`
  float: right;
`;
