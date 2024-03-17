module.exports = {
  dependencyTypes: ['dev', 'prod', 'peer'],
  semverRange: '^',
  source: ['package.json', 'apps/*/package.json', 'packages/*/package.json'],
  versionGroups: [
    {
      label:
        '내부 패키지는 "workspace:*로 고정되어야 합니다. (모든 버전이 허용됨을 의미합니다)',
      packages: ['**'],
      dependencies: [
        '@repo/eslint-config',
        '@repo/prettier-config',
        '@repo/tsup-config',
        '@repo/typescript-config',
        '@acme/themes',
        '@acme/ui',
      ],
      dependencyTypes: ['dev', 'prod', 'peer'],
      pinVersion: 'workspace:*',
    },
  ],
  semverGroups: [
    {
      range: '',
    },
  ],
};
