![img](https://cdn.qshop.ai/84/gallery/6b899130697211ee9beeabaccec472a7.png)

# 🚀 Squares Site

- [`Squares`](https://github.com/nhn/tui.editor/tree/master/apps/editor)
- [`QShop`](https://github.com/nhn/tui.editor/tree/master/apps/editor)

<br>

# ⚙️ Squares Configs

## 💾 Install
#### npm
```console
npm install -D @squares/eslint-plugin eslint prettier
```
#### yarn
```console
yarn add -D @squares/eslint-plugin eslint prettier
```

## 🔨Usage
#### Your Project (.esilntrc.js)
```console
module.exports = {
  plugins: ["@squares"],
  extends: ["plugin:@squares/auto"],
}
```

#### Your Project (.eslintrc.json)
```console
{
  plugins: ["@squares"],
  extends: ["plugin:@squares/auto"],
}
```

## 📙 auto config 설명
#### plugins
- `@squares`: 커스텀하게 작성 되어진 squares eslint 플러그인을 명시합니다.

#### extends
- `plugin:@squares/base`: 기본적인 js 플러그인들과 rule을 관리하는 base config 를 기본으로 사용합니다.

#### overrides
- `"**/*.ts?(x)"`: ts 파일은 typescript configa 설정을 적용하도록 override 합니다.
- `"**/*.{jsx,tsx}"`: jsx, tsx 와 같은 파일은 react config 설정을 적용하도록 override 합니다.
- `"**/*.tsx"`: tsx 파일 (react, typesciprt)에 대한 설정을 유연하게 적용하기 위해 별도로 꺼내두고 룰 적용

#### rules
|option|value|description|
|------|------|------|
|react/prop-types|off|props의 유효성 검사를 하는데 사용되는 설정으로 typescript를 사용하는 경우 중복된 유효성 검사를 수행하게 되므로 off 처리|

## 📙 base config 설명
#### extends
- `plugin:import/errors`:  import 플러그인의 오류를 검사하는 규칙 세트를 확장합니다. 이 규칙은 import 구문의 잘못된 사용 또는 문제를 식별합니다
- `eslint:recommended`: ESLint에서 권장하는 규칙을 사용합니다. 이것은 일반적으로 권장되는 ESLint의 기본 규칙을 의미합니다.
- `prettier`: Prettier 플러그인을 사용하여 ESLint 규칙을 설정합니다.

#### plugins
- `json-format`:  JSON 파일의 유효성을 검사하는 규칙을 포함합니다. 이 플러그인은 JSON 파일의 형식을 확인하고 유효하지 않은 구조를 검출합니다.
- `prettier`: Prettier 플러그인을 사용하여 코드를 포맷합니다. Prettier는 코드 포맷팅을 담당하여 설정된 규칙에 따라 코드를 자동으로 정리합니다.
- `imple-import-sort`: import 구문을 간단하게 정렬하는 규칙을 포함합니다. 이는 import 구문을 알파벳순으로 정렬하고 내부적으로 특정한 패턴을 따르도록 돕습니다.

#### rules(prettier)
|option|value|description|
|------|------|------|
|singleQuote|true|쌍따옴표 대신 홑따옴표 사용|
|semi|false|모든 구문 끝에 세미콜론 생략|
|tabWidth|2|들여쓰기 공백 수|
|useTabs|false|탭 대신 공백으로 들여쓰기|
|trailingComma|all|배열, 객체등의 마지막 요소에 콤마 사용 (가능한 후행 모든 곳에 콤마)|
|printWidth|80|줄 바꿈할 길이|
|arrowParens|avoid|한줄로 작성하는 함수의 매개변수 괄호 생략 가능, always: 모든 함수 매개변수에 괄호 추가 (2.0v 이후 기본 값 always) |
|useTabs|false|프로젝트에 남아 있는 prettier 설정 파일과 충돌을 피하기 위해 현재 설정한 eslint 설정만 사용하겠다는 옵션으로 false 처리, true인 경우 prettier설정을 설정 파일을 별도로 인식하여 사용 한다.|

## 📙 react config 설명
#### plugins

- `react`: react의 기본 규칙을 포함하는 플러그인 정의
- `react-hooks`: react hooks의 기본 규칙을 포함하는 플러그인 정의, hooks의 호출 위치, 의존성 배열(dependancy) 등을 체크
- `jsx-a11y`: react component 에서의 웹 접근성 관련 규칙을 포함한 플러그인을 정의

#### rules
|option|value|description|
|------|------|------|
|react-hooks/rules-of-hooks|error|react hooks를 올바르게 쓰지 못한 경우 error 발생|
|react-hooks/exhaustive-deps|warn|react hooks 에서 의존성 배열을 관리가 문제가 있는 경우 warning 처리, 의도된 의존성 처리가 있을 경우가 있기 때문에 warning 만 표시|
|no-console|0|console 사용을 위해 off|
|no-unused-vars|warn|정의 후 사용하지 않는 변수는 경고만 하기|

## 📙 typescript config 설명

#### parser
- `@typescript-eslint/parser`: TypeScript 파일을 파싱하기 위해 사용할 파서를 설정

#### extends
- `plugin:@typescript-eslint/recommended`: TypeScript 관련 ESLint 플러그인인 @typescript-eslint의 권장 규칙들을 사용하도록 설정

#### rules
|option|detailed option|value|description|
|------|------|------|------|
|@typescript-eslint/consistent-type-imports||error|TypeScript에서의 일관된 타입 임포트를 유지하도록 하는 설정|
||prefer|type-imports|타입 임포트(import type)를 사용하는 것을 권장<br>타입 정보를 명확하게 분리하여 구분할 수 있는 장점이 있음<br>예시)<br>```export type { User } from './user';```|
||disallowTypeAnnotations|warn|react hooks 에서 의존성 배열을 관리가 문제가 있는 경우 warning 처리, 의도된 의존성 처리가 있을 경우가 있기 때문에 warning 만 표시|