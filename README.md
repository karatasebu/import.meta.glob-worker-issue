## Installation

```
git clone https://github.com/karatasebu/import.meta.glob-worker-issue
cd import.meta.glob-worker-issue
npm install
```

## For Error

```
npm run build
npm run preview
```
Open the browser console

## Description

There is no issue in dev environment but in production import.meta.glob transpiled to (void 0) and getting "Uncaught TypeError: (void 0) is not a function" error.
