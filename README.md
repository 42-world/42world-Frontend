# 프로젝트 시작방법

`npm install` (혹시나 안되면 `npm ci`)
`npm start`

# 설정들(우리들의 약속 ㅎㅎ)

`srfc` 를 입력하고 엔터를 치면 스닙페이스트 됩니다.
혹시 안되면 저에게(TonyHan(chahan)) 연락주세요 :)

Organisms 내부는 여러분이 원하는데로 작성해주세요.

여러분의 스타일을 존중합니다.

대신 구조만 큰 `styled-component`를 만들고 그 내부는 className으로 구분해주세요

컴포넌트는 모두 대문자로 시작합니다.

# 역활 분배

- 메인페이지

jiwchoi, hyeonkim, chahan

- 글목록

sham

- 마이페이지

jiychoi

- 로그인, 회원가입, 네비게이션, 푸터

chahan

- 글쓰기, 글 상세페이지

klim

# 디렉토리 구조

[ public ]

- asset

  - 이미지 파일/동영상 파일

- apis
  - API 통신용

[ src/components ]

- atoms - 재활용되는 디자인

  - 디자인용 styled-compont

- organisms - 재활용되는 컴포넌트

  - 페이지 마다 디렉토리 존재

- pages - 페이지

  - 페이지 안에서만 사용되는 styled-compont는 해당 jsx 파일 내부에서 정의한다.

- contexts

  - 상태 관리용 디렉토리

- datas
  - 목업 데이터

# 임시 배포 위치

[https://festive-engelbart-6556a5.netlify.app/](https://festive-engelbart-6556a5.netlify.app/)

# 개발 순서

- 1. 목업 디자인을 만듭니다.(반응형 고려)
     목업 디자인을 만드는 과정을 alpha라고 부르고
     데이터들은 서버가 아닌 로컬 data 폴더에서 가져와 사용해주세요

- 2. Axios 통신을 구현합니다.
- 3. 세부 기능을 구현합니다.

# 설치된 패키지

react
react-dom
react-icons
react-router-dom
styled-components
axios
qs

# 개발 디자인

- Atomic Design

# git push 규칙

![readme/img.png](readme/img.png)

# 참고할만한 사이트

[https://pridiot.tistory.com/15](https://pridiot.tistory.com/15)
[https://www.npmjs.com/package/react-pro-sidebar](https://www.npmjs.com/package/react-pro-sidebar)

# 개발팁

jsx 파일안에서 `srfc` 하면 자동으로 styled components 형태로 만들어짐
