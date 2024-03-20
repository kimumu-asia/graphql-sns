import { readDB, writeDB } from "../dbController.js";

const getUsers = () => readDB("users");

const usersRoute = [
  {
    method: "get",
    route: "/users",
    handler: (req, res) => {
      const users = getUsers();
      res.send(users);
    },
  },
  {
    method: "get",
    route: "/users/:id",
    handler: ({ params: { id } }, res) => {
      try {
        const users = getUsers();
        const user = users.find((u) => u.id === id);
        if (!user) throw Error("사용자가 없습니다.");
        res.send(user);
      } catch (error) {
        res.status(500).send({ error });
      }
    },
  },
];

export default usersRoute;
