<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


koa&express
- 只实现web服务
- 路由日志请求拦截等需要自己实现
- 整体逻辑轻量、易理解

egg.js
- 路由 + 逻辑简洁
- CMD规范、加入了逻辑分层
- 非ts书写、整体可能有性能问题

nest.js
- 路由 + 逻辑简洁
- 合理的逻辑分层
- 使用TypeScript更健壮


```bash
nest g module user --no-spec -d
nest g controller user --no-spec -d
nest g service user --no-spec -d
```