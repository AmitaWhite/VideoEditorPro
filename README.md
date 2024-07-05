# VideoEditorPro

[1] 디자인

- 다영님 디자인을 기본 베이스로
  - 단, 디자인 코드 부분 정리 필요(라이브러리 통일)
- CSS : Sass 사용 (https://sass-lang.com/guide/)
  - index.sass

[2] 기능

1. 기존 개발 요소

( 단, 코드 리팩토링 진행 )
- 비디오 업로드
- 비디오 재선택
- 영상 길이 조절
- GIF 다운로드
- MP4 다운로드

2. 추가기능

- MP3 다운로드
- Dark/Light Toggle
- Ascii Converter (참고 : https://github.com/pzich/ffmpeg-ascii) : Page 분리해서 (ex : 컨버터 버튼)
- 필터 기능 (흑백)
- 배속
- 슬라이더 꾸미기( 기존 바 -> 이미지 썸네일)
- 최적화
  - 변환, 추출 최적화 (실행시간)
  - 압축 코덱 (용량)


[3] 사용 라이브러리 명세

- 디자인 : Chakra UI
- Build, Bundling : React + Vite
- 외부 기능 라이브러리
  - FFmpeg : 비디오 웹 변환
  - react-video : 비디오 재생


[4] 커밋 메세지 Rule : ['commit tag'] "commit message"
- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서의 수정
- style : (코드의 수정 없이) 스타일(style)만 변경(들여쓰기 같은 포맷이나 세미콜론을 빼먹은 경우)
- refactor : 코드를 리펙토링
- test : Test 관련한 코드의 추가, 수정
- chore : (코드의 수정 없이) 설정을 변경
- storybook: 스토리북 관련 추가, 수정

[4] Naming Convention
- 컴포넌트 정의 : Pascal Case
  1) 명사 only
- 함수 정의 : camel Case
  1) 
- hooks  : 'use-' as prefix


[5] Dir 구조
'- src
  |- pages/
  |- components/
    |- common/
  |- hooks/
  |- assets/
'


