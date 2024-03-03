import { readDB, writeDB } from "../dbController";

const messagesRoute = [
  {
    method: "get",
    route: "/messages",
    handler: (req, res) => {
      const msgs = readDB("messages");
      res.send();
    },
  },
  {
    method: "post",
    route: "/messages",
    handler: (req, res) => {
      res.send();
    },
  },
  {
    method: "put",
    route: "/messages/:id",
    handler: (req, res) => {
      res.send();
    },
  },
  {
    method: "delete",
    route: "/messages/:id",
    handler: (req, res) => {
      res.send();
    },
  },
];

export default messagesRoute;
