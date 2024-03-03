// nodejs에서는 기본적으로 es6의 모듈문법을 사용할 수 없음
// 사용하려면 package.json에 "type": "module"을 추가해야함
import fs from "fs";
import { resolve } from "path";

// 현재에 있는 경로가 basePath 경로로 잡히게 됨
const basePath = resolve();

const filenames = {
  messages: resolve(basePath, "src/db/messages.json"),
  users: resolve(basePath, "src/db/users.json"),
};

export const readDB = (target) => {
  try {
    return JSON.parse(fs.readFileSync(filenames[target], "utf-8"));
  } catch (error) {
    console.error(error);
  }
};
export const writeDB = (target, data) => {
  try {
    return fs.writeFileSync(filenames[target], JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};
