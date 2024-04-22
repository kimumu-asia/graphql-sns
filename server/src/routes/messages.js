import { readDB, writeDB } from "../dbController.js";

import { v4 } from "uuid";

const getMessages = () => readDB("messages");
const setMessages = (data) => writeDB("messages", data);

const messagesRoute = [
  // GET MESSAGES
  {
    method: "get",
    route: "/messages",
    handler: (req, res) => {
      const msgs = getMessages();
      res.send(msgs);
    },
  },
  // GET MESSAGE
  {
    method: "get",
    route: "/messages/:id",
    handler: ({ params: { id } }, res) => {
      try {
        const msgs = getMessages();
        const msg = msgs.find((m) => m.id === id);
        res.send(msg);
      } catch (error) {
        res.status(404).send({ error });
      }
    },
  },
  // CREATE MESSAGE
  {
    method: "post",
    route: "/messages",
    handler: ({ body }, res) => {
      try {
        if (!body.userId) {
          throw Error("userId is required");
        }
        const msgs = getMessages();
        const newMessage = {
          id: v4(),
          text: body.text,
          userId: body.userId,
          timestamp: Date.now(),
        };
        msgs.unshift(newMessage);
        setMessages(msgs);
        res.send(newMessage);
      } catch (error) {
        res.status(500).send({ error });
      }
    },
  },
  // UPDATE MESSAGE
  {
    method: "put",
    route: "/messages/:id",
    handler: ({ body, params: { id } }, res) => {
      try {
        const msgs = getMessages();
        const targetIndex = msgs.findIndex((msg) => msg.id === id);

        if (targetIndex < 0) {
          throw "메시지가 없습니다.";
        }

        if (msgs[targetIndex].userId !== body.userId) {
          throw "사용자가 일치하지 않습니다.";
        }

        const newMsg = { ...msgs[targetIndex], text: body.text };
        msgs.splice(targetIndex, 1, newMsg);
        setMessages(msgs);
        res.send(newMsg);
      } catch (error) {
        res.status(500).send({ error });
      }
    },
  },
  // DELETE MESSAGE
  {
    method: "delete",
    route: "/messages/:id",
    handler: ({ body, params: { id }, query: { userId } }, res) => {
      try {
        const msgs = getMessages();
        const targetIndex = msgs.findIndex((msg) => msg.id === id);
        if (targetIndex < 0) {
          throw "메시지가 없습니다.";
        }
        if (msgs[targetIndex].userId !== userId) {
          throw "사용자가 일치하지 않습니다.";
        }

        msgs.splice(targetIndex, 1);
        setMessages(msgs);
        res.send(id);
      } catch (error) {
        res.status(500).send({ error });
      }
    },
  },
];

export default messagesRoute;
