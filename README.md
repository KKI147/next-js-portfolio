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
 <li>화면 로딩시 애니메이션의 좌우 진행방향이 다른 CSS를 동일한 Container로 간주하고 같은 속성을 적용하여, 의도한 바와 다르게 구현 되었음</li>
 <div>ㄴ 각 진행방향이 다른 애니메이션에 Keframe의 to ~ from 속성을 개별적으로 주어서 별도로 진행되도록 적용</div>
  <br>
 <li>PC Screen에서 구현된 li 요소의 간격이 Mobile Device에서는 비교적 좁아 시각적인 답답함을 유발하는 느낌이 있었음</li>
  <div>ㄴ Device별 Screen의 width에 맞게 각 요소들의 배치를 가로 및 세로로 변경해보면서 적절한 레이아웃을 적용</div>
  <br>
 <li>Cross Browsing 테스트 진행 시, 각 브라우저 및 Device별 화면에서 노출되는 레이아웃이 상이하였음</li>
   <div>ㄴ Cross Browsing 테스트 진행 시, localhost:port와 같은 대역 Wifi를 이용하여 실시간 Mobile Device별 %값 적용으로 테스트를 진행</div>
   <br>
 </li>
 </ul>

## **📌 회고**
<ul>
 <li>같은 코드더라도, Cross Browsing 테스트 진행 시 화면별 적용 CSS 및 레이아웃에 차이를 보고, 명확한 기준 및 설계가 추후 개발에 영향을 준다는 것을 느낌</li>
</ul>
 
