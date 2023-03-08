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
  position: absolute;
  bottom: 0;
  font-size: 1rem;
  color: #fff;
  ${({ variant }: CssType) => {
    switch (variant) {
      case "page":
        return css`
          width: 100%;
        `;
      case "home":
        return css`
          width: calc(100% - 30px);
          padding: 15px 5px;
        `;
      default:
        break;
    }
  }}
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

const Text = styled.div`
  float: right;
`;
