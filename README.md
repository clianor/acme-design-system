# ACME Design System

## 소개

해당 프로젝트는 디자인 시스템을 위한 모노레포 프로젝트입니다.  
React 용으로 제작되었으며, 다양한 도구를 이용하여 패키지를 만들어가고 유지 관리합니다.

## 사용 라이브러리

- ⚡️Turborepo — 모노레포를 위한 고성능 빌드 시스템
- ✨Tsup — 타입스크립트 라이브러리를 위한 간단하고 매우 빠른 번들러
- 🔍Syncpack — 모노레포 내에서 일관된 종속성을 보장
- 📖Storybook Vite로 구동되는 UI 구성 도구

## 주요 특징

- 터보레포를 활용하여 변경이 감지되지 않는 한 명령이 다시 실행되지 않습니다.
- eslint, prettier, typescript, tsup과 같은 도구에 대한 공통 설정이 포함된 패키지를 포함합니다.
- app/docs 어플리케이션은 모든 패키지에 걸쳐있습니다.

## 명령어

- `pnpm run build` - 모든 패키지를 빌드합니다. 프로덕션 준비 과정에서 필수적입니다.
- `pnpm run dev` - 개발 모드에서 프로젝트를 시작합니다. 변경 사항이 실시간으로 반영됩니다.
- `pnpm run lint` - 코드 스타일과 문법 오류를 검사합니다. eslint를 사용합니다.
- `pnpm run lint:packages:list` - 패키지 간의 종속성 목록을 검사합니다.
- `pnpm run lint:packages:mismatches` - 패키지 간의 버전 불일치를 찾습니다.
- `pnpm run lint:packages:fix-mismatches` - 패키지 간의 버전 불일치를 자동으로 수정합니다.
- `pnpm run test` - 모든 테스트를 실행합니다. 단위 테스트와 통합 테스트를 포함할 수 있습니다.
- `pnpm run test:watch` - 파일 변경 시 테스트를 자동으로 재실행합니다.
- `pnpm run test:ui` - UI 컴포넌트의 테스트를 실행합니다. 주로 Storybook을 사용할 때 활용됩니다.
- `pnpm run clean` - 빌드 시 생성된 모든 임시 파일과 폴더를 제거합니다.
- `pnpm run format` - 코드 포맷터를 실행하여 코드 스타일을 일관되게 유지합니다. 주로 Prettier를 사용합니다.
- `pnpm run changeset` - 변경 사항을 관리하고 버전을 업데이트하는 데 사용합니다.
- `pnpm run version-packages` - 변경된 패키지의 버전을 업데이트합니다.
- `pnpm run release` - 변경된 패키지를 배포합니다.
