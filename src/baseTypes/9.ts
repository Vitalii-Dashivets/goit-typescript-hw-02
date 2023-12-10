import { StringLiteral } from "../../../node_modules/typescript/lib/typescript";

/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/
type Status = "open" | "close";
type DateType = {
  createAt: Date;
  updateAt: Date;
};

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: Status;
  details?: DateType;
};

let page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

let page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export {};
