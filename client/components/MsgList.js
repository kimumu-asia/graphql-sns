import MsgInput from "./MsgInput";
import MsgItem from "./MsgItem";
import { useState } from "react";

const UserIds = ["seola", "yeonwoo"];

const getRandomUserId = () => UserIds[Math.round(Math.random())];

const originalMessages = Array(50)
  .fill(0)
  .map((_, i) => ({
    id: i + 1,
    userId: getRandomUserId(),
    timestamp: 1234567890123 + i * 1000 * 60,
    text: `${i + 1} mock test`,
  }))
  .reverse();

const MsgList = () => {
  const [msgs, setMsgs] = useState(originalMessages);
  const onCreate = (text) => {
    const newMessage = {
      id: msgs.length,
      userId: getRandomUserId(),
      timestamp: Date.now(),
      text: `${msgs.length + 1} ${text}`,
    };

    setMsgs((msgs) => [newMessage, ...msgs]);
  };
  return (
    <>
      <MsgInput mutate={onCreate} />
      <url className="messages">
        {msgs.map((x) => (
          <MsgItem key={x.id} {...x} />
        ))}
      </url>
    </>
  );
};

export default MsgList;
