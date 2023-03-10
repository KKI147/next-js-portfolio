import Head from "next/head";
import styled, { css } from "styled-components";
import Wrapper from "@/component/Wrapper";

interface CssType {
  variant: string;
}
export default function Projects() {
  return (
    <>
      <Wrapper>
        <TotlaWrapper>
          <LeftWrapper>
            <Box color="150px 0 0 0 ">
              <Date variant="left">2023.02</Date>
              <div>
                <Title>F:E Func, Development</Title>
                <Text>
                  <div>
                    ‣ FE에서 사용자에게 자주 사용되고 유용한 서비스를 리스트업
                    하고 학습 및 개발.
                  </div>
                  <div>‣ React Hook form, yup를 이용한 회원가입 개발</div>
                  <div>‣ 입력값 검증 및 로그인 개발.</div>
                  <div>
                    ‣ FormData 및 Multer를 사용한 첨부파일 업로드 개발예정.
                  </div>
                  <div>
                    ‣ FormData 및 Multer를 사용한 첨부파일 다운로드 개발예정.
                  </div>
                  <div>
                    ‣ React-Sun-Editor를 사용한 Editor Service 개발예정.
                  </div>
                  <div>
                    ‣ 간단한 입력폼의 정보를 React Hook Form, Email-JS를 통한
                    메일전송 개발.
                  </div>
                  <div>‣ React-Calender 개발예정.</div>
                  <div>‣ Kakao Map API Service를 통한 Map 개발예정.</div>
                  <div>‣ Recoil Store를 통한 Loading Component 개발예정.</div>
                </Text>
              </div>
            </Box>

            <Box color="180px 0 0 0 ">
              <Date variant="left">2023.01</Date>
              <div>
                <Title>Portfolio</Title>
                <Text>
                  <div>
                    ‣ 본인의 기술스택 정리와 구현해보고자 했던 기술을 적용한
                    포트폴리오 사이트.
                  </div>
                  <div>‣ Swiper를 활용한 Page Section Scroll 개발.</div>
                  <div>‣ createPortal 통해 Modal 개발.</div>
                  <div>
                    ‣ React-Slider를 활용하여, 포트폴리오 목록을 carousel로
                    개발.
                  </div>
                </Text>
              </div>
            </Box>

            <Box color="180px 0 0 0 ">
              <Date variant="left">2022.11</Date>
              <div>
                <Title>Velog 클론코딩</Title>
                <Text>
                  <div>
                    ‣ Velog 클론코딩과 서비스 및 기능 이해를 위한 프로젝트.
                  </div>
                  <div>
                    ‣ 비동기 API 통신 및 Redux를 사용한 게시글 CRUD 서비스 개발.
                  </div>
                  <div>
                    ‣ Toast Editor 라이브러리 사용 및 게시글 Markdown Format
                    적용 개발.
                  </div>
                  <div>
                    ‣ FormData를 이용한 이미지 업로드 및 미리보기 기능 개발.
                  </div>
                  <div>‣ 프로젝트 퍼블리싱 및 Nav Bar Component 개발.</div>
                  <div>‣ 프로젝트 일정관리 및 협업 Notion 이용.</div>
                </Text>
              </div>
            </Box>

            <Box color="180px 0 0 0 ">
              <Date variant="left">2022.10</Date>
              <div>
                <Title>To Do List</Title>
                <Text>
                  <div>
                    ‣ 스스로 해야하는 목록에 대해서 첫 CRUD 개발 사이트.
                  </div>
                  <div>‣ 게시글 목록에 대한 작성 및 사용자 Alert 개발.</div>
                  <div>‣ 게시글 삭제 및 API 데모 통신 개발.</div>
                  <div>‣ 프로젝트 퍼블리싱.</div>
                </Text>
              </div>
            </Box>
          </LeftWrapper>

          <MiddeWrapper>
            <Line></Line>
          </MiddeWrapper>

          <RightWrapper>
            <Box>
              <Date variant="right">2023.03</Date>
              <div>
                <Title>Portfolio</Title>
                <Text>
                  <div>‣ Next-Js와 TypeScript로 작성한 Portfolio.</div>
                </Text>
              </div>
            </Box>
            <Box>
              <Date variant="right">2023.01</Date>
              <div>
                <Title>카카오(Kakao) 클론코딩</Title>
                <Text>
                  <div>
                    ‣ 카카오 페이지의 Card Component 반응형 CSS 학습을 위한
                    클론코딩.
                  </div>
                  <div>
                    ‣ 작년에 새로 배포된 Next.js v13 사용 및 SSR 서비스 학습.
                  </div>
                  <div>‣ 각 화면 width에 따른 반응형 CSS 개발.</div>
                  <div>‣ Component Props Type, Interface 학습 및 적용.</div>
                </Text>
              </div>
            </Box>

            <Box>
              <Date variant="right">2022.12</Date>
              <div>
                <Title>Vongole</Title>
                <Text>
                  <div>
                    ‣ 비동기 API 통신 및 Redux를 사용한 게시판 댓글 CRUD 서비스
                    개발.
                  </div>
                  <div>‣ React-Calendar를 사용한 달력 개발.</div>
                  <div>
                    ‣ 월별 봉사일정 및 회원 각 개인일정 표기 Calendar Event
                    개발.
                  </div>
                  <div>‣ Kakao Map API를 사용한 Component 개발.</div>
                  <div>‣ 선택 및 특정지역 Marker 표기 개발.</div>
                  <div>
                    ‣ Figma Design File을 통한 디자이너와 협업 퍼블리싱 진행.
                  </div>
                </Text>
              </div>
            </Box>
            <Box>
              <Date variant="right">2022.11</Date>
              <div>
                <Title>Race-of-the-belly</Title>
                <Text>
                  <div>
                    ‣ 배달의민족 기능 및 서비스를 오마주하여 개발한 음식점 등록,
                    주문 서비스.
                  </div>
                  <div>
                    ‣ 회원가입 시 회원 유형에 따른 가입 서비스 로직 분기 개발.
                  </div>
                  <div>
                    ‣ JWT Token을 이용한 API 통신 및 회원가입 기능 개발.
                  </div>
                  <div>
                    ‣ 로그인 입력 값에 따른 유효성 검사(Regex, 정규 표현식)
                    개발.
                  </div>
                  <div>
                    ‣ 기본 비동기 API 통신을 통한 게시글 CRD 서비스 개발.
                  </div>
                </Text>
              </div>
            </Box>
          </RightWrapper>
        </TotlaWrapper>
      </Wrapper>
    </>
  );
}

const TotlaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;
const LeftWrapper = styled.div`
  position: relative;
  width: 45%;
  /* background-color: green; */
`;

const MiddeWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 10%;
  height: 100%;
`;

const Line = styled.div`
  position: absolute;
  width: 2px;
  height: 250%;
  background-color: #fff;
`;

const RightWrapper = styled.div`
  position: relative;
  width: 45%;
  /* background-color: blueviolet; */
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  background-color: #353535;
  border-radius: 8px;
  box-shadow: 2px 2px 6px 2px #555555;
  margin: ${(props) => props.color || "30px 0 150px 0"};
  padding: 20px 10px;
`;

const Title = styled.div`
  padding: 0 5px;
  font-size: 1.5rem;
  color: #fff;
`;
const Text = styled.div`
  margin: 10px 0 0 0;
  font-size: 1.2rem;
  color: #8e8e8e;
  line-height: 1.5;
`;

const Date = styled.div`
  position: absolute;
  top: -50px;
  color: #fff;
  font-size: 1.5rem;
  ${({ variant }: CssType) => {
    switch (variant) {
      case "left":
        return css`
          right: 0;
        `;
      case "right":
        return css`
          left: 0;
        `;
      default:
        break;
    }
  }}
`;
