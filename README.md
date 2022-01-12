# Basic Express Setting

## Spec

1. Node.js (16.13.0)
2. Babel
3. PM2
4. MySQL

## Dependency

1. "@babel/register": "^7.16.8",
1. "@babel/runtime": "^7.16.7",
1. "cookie-parser": "~1.4.4",
1. "debug": "~2.6.9",
1. "dotenv": "^10.0.0", // 환경 설정
1. "express": "~4.16.1",
1. "http-errors": "~1.6.3",
1. "morgan": "~1.9.1",
1. "mybatis-mapper": "^0.6.5",
1. "mysql": "^2.18.1", //  DB Connect
1. "pm2": "^5.1.2" // 프로세스 관리자

## 셋팅

### Only express

* [Express Install 및 실행](https://donghokim.tistory.com/55)

### express + babel
* [Express Babel Setting 참고](https://velog.io/@jiheon/Node.js-Express-Babel-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

1. 프로젝트 루트 경로 내에 src/ 생성
1. bin/, public/, routes/, views/, app.js -> src/ 안으로 이동
1. src/bin/ 내에 www -> www.js로 변경
1. ES5 -> ES6로 코드 변경
   * var app = require("express") -> import http from 'express';
   * function normalizePort(val) {} -> const normalizePort = (val) => {}
1. babel Dependency 설치
   * $ npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
   * $ npm install --save-dev @babel/plugin-transform-runtime
   * $ npm install --save @babel/runtime  # runtime 종속성, -dev 옵션 X
   * $ npm install --save-dev babel-plugin-transform-remove-console # build 할 때 console.log 제거 
1. babel.config.js 파일 생성
   * ```javascript
      module.exports = {
      presets: ['@babel/env'],
      plugins:
         process.env.NODE_ENV === 'production'
            ? ['transform-remove-console', '@babel/plugin-transform-runtime']
            : ['@babel/plugin-transform-runtime'],
            ignore: ['./src/public/**/*.js'],
      };
      ```
1. Express 실행 
   1. package.json
      1. ```javascript
         {
            "scripts": {
               "dev": "nodemon --exec babel-node src/bin/www.js",
               "build": "NODE_ENV=production babel src --out-dir dist --copy-files",
               "start": "node dist/bin/www.js"
            },
         }
         ```