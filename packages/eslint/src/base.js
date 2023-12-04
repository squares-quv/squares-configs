module.exports = {
    extends: ["plugin:import/errors", "eslint:recommended", "prettier"],
    plugins: ["json-format", "prettier", "simple-import-sort"],
    rules: {
      "prettier/prettier": [
        "error",
        {
          // 쌍따옴표 대신 홑따옴표 사용
          singleQuote: true,
          // 모든 구문 끝에 세미콜론 생략
          semi: false,
          // 들여쓰기 공백 수 
          tabWidth: 2,
           // 탭 대신 공백으로 들여쓰기
          useTabs: false,
          // 배열, 객체등의 마지막 요소에 콤마 사용 (가능한 후행 모든 곳에 콤마)
          trailingComma: "all",
          // 줄 바꿈할 길이
          printWidth: 80,
          // 한줄로 작성하는 함수의 매개변수 괄호 생략 가능, always: 모든 함수 매개변수에 괄호 추가 (2.0v 이후 기본 값 always) 
          arrowParens: "avoid",
        },
        {
          /**
           * 프로젝트에 남아 있는 prettier 설정 파일과 충돌을 피하기 위해 현재 설정한 
           * eslint 설정만 사용하겠다는 옵션으로 false 처리, true인 경우 prettier설정을 설정 파일을 별도로 인식하여 사용 한다.
           */
          usePrettierrc: false,
        },
      ],
      "simple-import-sort/imports": "error", // import 구문을 간단한 형태로 정렬하여 사용합니다. ("error")
      "simple-import-sort/exports": "error", // export 구문을 간단한 형태로 정렬하여 사용합니다. ("error")
      "import/no-unresolved": "off",         // 해석할 수 없는 import 구문에 대한 경고를 비활성화합니다. ("off")
      "import/prefer-default-export": "off", // 단일 export 대신 default export를 선호하는 규칙을 비활성화합니다. ("off")
      "import/extensions": "off",            // 파일 확장자에 대한 import를 강제하지 않습니다. ("off")
    },
  };