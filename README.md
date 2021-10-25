# Perfanalytics Api

### Getting Started

To run this project on your own computer

```
$ git clone https://github.com/oguzergul/performance-analytics-api

$ npm install
$ npm start
```

### Api Routes
Api routes and services

```javascript
router.get('/', serveLastHalfHoursRecord) // it serves lastly recorded reports
```

```javascript
router.get('/performance', createPerformanceRecord) // it creates new performance record
```

```javascript
router.post('/performance', serveAllPerformanceRecord) // it serves all recorded performance record
```

```javascript
router.get('/find-performance', serveSpecificDatesRecord) // it serves specific date's performance records
```
### DB Connection Enviroments
```
MONGO_DB_USERNAME= ...
MONGO_DB_PASSWORD= ...
MONGO_DB_DATABASE= ...
```

### Docker
To run this project using Docker
```
// run this command (.env required for db)

$ docker-compose up
```
### Benchmarking
autocannon load tests made and RPS > 200 <br>
Run this command on terminal
```
$  autocannon -c 2000 -d 10  https://performart.herokuapp.com/
```

```
Running 10s test @ https://performart.herokuapp.com/ 2000 connections


┌─────────┬────────┬─────────┬─────────┬─────────┬────────────┬────────────┬──────────┐
│ Stat    │ 2.5%   │ 50%     │ 97.5%   │ 99%     │ Avg        │ Stdev      │ Max      │
├─────────┼────────┼─────────┼─────────┼─────────┼────────────┼────────────┼──────────┤
│ Latency │ 201 ms │ 4132 ms │ 9740 ms │ 9942 ms │ 4537.24 ms │ 2824.48 ms │ 10039 ms │
└─────────┴────────┴─────────┴─────────┴─────────┴────────────┴────────────┴──────────┘
┌───────────┬─────┬──────┬─────────┬────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%  │ 2.5% │ 50%     │ 97.5%  │ Avg     │ Stdev   │ Min     │
├───────────┼─────┼──────┼─────────┼────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 0   │ 0    │ 82      │ 146    │ 84.8    │ 45.2    │ 33      │
├───────────┼─────┼──────┼─────────┼────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 0 B │ 0 B  │ 68.4 kB │ 122 kB │ 70.6 kB │ 37.7 kB │ 27.5 kB │
└───────────┴─────┴──────┴─────────┴────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

4k requests in 10.78s, 706 kB read

251k requests in 10.05s, 27.9 MB read
```



### Commits

When you are sending a commit please follow the instructions below

- If you added new piece of code or logic please use `[feat]the-name-of-the-commit` beginning of naming the commit.

- If it's a improvement by updating existing piece of code or logic, use `[imp]the-name-of-the-commit`

This repository is using [conventional](https://www.conventionalcommits.org/en/v1.0.0/#specification) commits.

> Conventional commits are a specification for adding human and machine readable meaning to commit messages

### Commit Types

`feat`: A new feature

`fix`: A bug fix

`docs`: Documentation only changes

`style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

`refactor`: A code change that neither fixes a bug nor adds a feature

`imp`: A code change that improves performance

`test`: Adding missing or correcting existing tests

`chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Stack
- `Node.js` JavaScript Runtime
- `Express` Web Framework for Node.js
- `cors` Cors Policy
- `http-status` Http Status Responser
- `Jest` JavaScript Test Framework
- `autocannon` Api Load Tests

### Licence
- MIT Licence @oguzergul
