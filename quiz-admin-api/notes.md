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