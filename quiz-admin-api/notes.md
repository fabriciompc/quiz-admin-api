Steps

1 - Run `npm init -y`
2 - Run `npm install typescript jest @types/jest @types/node --save-dev `
3 -  `npm install git-commit-msg-linter --save-dev`
4 - Create .gitignore file.
5 - Create and set tsconfig.json :
```{
  "compilerOptions": {
    "outDir": "./dist",
    "module": "commonjs",
    "target": "ES2019",
    "esModuleInterop": true,
    "allowJs": true
  }
}
```

6 - Install Eslint Typescript JS Standards:

```
npm install --save-dev \
  typescript@^4 \
  eslint@^7.12.1 \
  eslint-plugin-promise@^5.0.0 \
  eslint-plugin-import@^.22.1 \
  eslint-plugin-node@^11.1.0 \
  @typescript-eslint/eslint-plugin@^4.0.1 \
  eslint-config-standard-with-typescript@latest
```
  *For Visual Studio Code users install the extension EsLint.

7 - Create and set .eslintrc.json:
```
{
  "extends": "standard-with-typescript",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
Create the .eslintignore file too:
```
node_modules
dist
```