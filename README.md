# squares-configs
squares configs

# 개발 환경
- monorepo 
  - 현재는 eslint 설정 한개의 패키지만 존재하지만, 추후 추가적인 설정들이 생길 수 있고 앞으로 패키지화 할 수 있는 항목들에 대해 미리 예행정도..

- yarn 3.4.1 (berry 는 yarn 의 v2)

- yarn workspace
  - 하나의 repository에서 여러 패키지를 관리 할 수 있게 해주는 패키지 매니저
  - package.json workspace 항목 참고

- 빌드도구: nanobundle
  - package.json의 정보를 토대로 빌드를 자동으로 해주는 도구

- ultra-runner는 모노레포에서 유용한 스크립트 실행기
  - 각각의 패키지의 스크립트를 root 위치에서 한번에 실행 할 수 있는 스크립트 실행기
  
- 버전관리도구: changesets
  - ultra-runner와 마찬가지로 root 위치에서 각각의 패키지의 버전업을 수월하게 사용할 수 있음 (각각의 패키지에서 )
  