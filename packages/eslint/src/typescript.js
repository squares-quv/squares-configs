module.exports = {
    // TypeScript 파일을 파싱하기 위해 사용할 파서를 설정 
    parser: "@typescript-eslint/parser",
    // TypeScript 관련 ESLint 플러그인인 @typescript-eslint의 권장 규칙들을 사용하도록 설정
    extends: ['plugin:@typescript-eslint/recommended'],
    rules: {
      // TypeScript에서의 일관된 타입 임포트를 유지하도록 하는 설정
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          /**
           * prefer: "type-imports"는 타입 임포트(import type)를 사용하는 것을 선호한다는 의미
           * 
           */
          prefer: "type-imports",
          // 는 타입 주석을 허용하는 것을 의미합니다. 이 규칙을 사용하여 타입 관련한 코드 일관성을 유지하고 가독성을 높일 수 있습니다.
          disallowTypeAnnotations: false,
        },
      ],
    },
  };