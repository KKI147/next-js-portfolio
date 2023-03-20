# 프로젝트 목표와 목적
기 구현되었던 포트폴리오 프로젝트에서의 화면 및 디자인 개선점을 적용한 2차 포트폴리오 프로젝트로써,
Next.js 및 Typescript를 이용하여 성능 및 효율에서 뛰어난 기술스택을 사용한 포트폴리오 개선 프로젝트

## 목표
<ul>
  <li>레이아웃 설계 및 구현</li>
  <li>사용자의 집중을 일으킬 수 있는 Page Loading Animation 구현</li>
  <li>Device별 적절한 Media Query 분기점 확립 및 적용</li>
</ul>

## 🔗[페이지 이동하기](https://next-js-portfolio-smoky.vercel.app/)

## **🛠️ 스택** 

<div>
<img src="https://img.shields.io/badge/html-1572B6?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<br>
 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/Next.js-339933?style=for-the-badge&logo=Next.js&logoColor=white">
 <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
 </div>
 <br>
 
## **❗ 문제상황 & 해결**
<ul>
 <li>화면 로딩시 애니메이션의 좌우 진행방향이 다른 CSS를 동일한 Container로 간주하고 같은 속성을 적용하여, 애니메이션 적용이 부적절 하였음</li>
 <div>ㄴ 각 진행방향이 다른 애니메이션에 Keframe의 to ~ from 속성을 개별적으로 주어서 별도로 진행되도록 적용</div>
  <br>
 <li>일정 이하의 스크린에서 요소들의 간격이 너무 좁아서 답답함을 느낌
</li>
 <div>ㄴ media별 요소들의 배치를 바꿔서 각 media별로 구성</div>
  <br>
 <li>cross browsing시에 화면마다 나오는 비율이 제각각인 현상 발생
</li>
 <div>ㄴ 값들을 %로 전환해서 그 media의 상황에 맞게 부여</div>
 
 </ul>

## **📌 회고**
<ul>
 <li>똑같은 개발환경에서의 코드이지만 cross browsing시에 표현되는 것이 달라서 좀더 명확하게 기준을 잡고 개발해야할 필요성을 느낌.</li>
 </ul>
 
