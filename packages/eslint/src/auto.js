module.exports = {
  /**
   * npm 범위 모듈에 대한 설명으로 플러그인 모듈 사용 시 모듈 명 생략이 가능
   * @see https://eslint.org/docs/latest/extend/shareable-configs#npm-scoped-modules
   */ 
  plugins: ["@squares"],
  extends: ["plugin:@squares/base"],
  overrides: [
    {
      // ts 파일은 typescript configa 설정을 적용하도록 override 합니다.
      files: ["**/*.ts?(x)"],
      extends: ["plugin:@squares/typescript"],
    },
    {
      // jsx, tsx 와 같은 파일은 react config 설정을 적용하도록 override 합니다.
      files: ["**/*.{jsx,tsx}"],
      extends: ["plugin:@squares/react"],
    },
    {
      // tsx 파일 (react, typesciprt)에 대한 설정을 유연하게 적용하기 위해 별도로 꺼내두고 룰 적용
      files: ["**/*.tsx"],
      rules: {
        // props의 유효성 검사를 하는데 사용되는 설정으로 typescript를 사용하는 경우 중복된 유효성 검사를 수행하게 되므로 off 처리
        "react/prop-types": "off",
      },
    },
  ],
};