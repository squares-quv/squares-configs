module.exports = {
    /**
     * react: react의 기본 규칙을 포함하는 플러그인 정의
     * react-hooks: react hooks의 기본 규칙을 포함하는 플러그인 정의, hooks의 호출 위치, 의존성 배열(dependancy) 등을 체크
     * jsx-a11y: react component 에서의 웹 접근성 관련 규칙을 포함한 플러그인을 정의
     */
    plugins: ["react", "react-hooks", "jsx-a11y"],
    rules: {
      // react hooks를 올바르게 쓰지 못한 경우 error 발생
      "react-hooks/rules-of-hooks": "error",
      // react hooks 에서 의존성 배열을 관리가 문제가 있는 경우 warning 처리, 의도된 의존성 처리가 있을 경우가 있기 때문에 warning 만 표시
      "react-hooks/exhaustive-deps": "warn",
      // console 사용하기
      'no-console': 0,
      // 정의 후 사용하지 않은 변수는 경고만 하기
      'no-unused-vars': 'warn',
    },
  };