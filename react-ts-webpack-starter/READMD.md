# react-ts-webpack-starter

- 由于`webpack`默认只能识别js文件，不能识别jsx语法，需要配置loader的预设预设 `@babel/preset-typescript` 来先将ts语法转换为js语法，再借助预设 `@babel/preset-react` 来识别jsx语法。
- `ts-node`：编译 ts 文件，它可以立即编译并执行指定的 TypeScript 文件，因此不需要单独的编译步骤。
- `babel-loader`: 使用 babel 加载最新 js 代码并将其转换为 ES5
- `@babel/corer`: babel 编译的核心包
- `@babel/preset-env`: babel 编译的预设，可以转换目前最新的js标准语法
- `core-js`: 使用低版本js语法模拟高版本的库，也就是垫片


开发环境推荐：`eval-cheap-module-source-map`
- 本地开发首次打包慢点没关系，因为 eval 缓存的原因，热更新会很快
- 开发中，我们每行代码不会写的太长，只需要定位到行就行，所以加上 cheap
- 我们希望能够找到源代码的错误，而不是打包后的，所以需要加上 module
