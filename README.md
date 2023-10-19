# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
# 启动 app
$ make start
# 关闭 app
$ make stop
```

```bash
$ cd typesense
# 启动 search
$ make start
# 关闭 search
$ make stop

```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Sequelize

```
npx sequelize db:migrate
npx sequelize db:migrate:undo

npx sequelize migration:generate --name=add-column-tablename
npx sequelize migration:generate --name=add-api

npx sequelize-auto -c './database/auto.config.js' -o "./dist/models"

```

### Requirement

- Node.js 16.x
- Typescript 4.x

### docker

· docker build -t eggts -f ./docker/dockerFile .
