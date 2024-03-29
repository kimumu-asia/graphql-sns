import { useRef } from "react";

const MsgInput = ({ mutate, id = undefined }) => {
  const textRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    textRef.current.value = "";
    mutate(text, id);
  };

  return (
    <form className="messages__input" onSubmit={onSubmit}>
      <textarea ref={textRef} placeholder="메시지를 입력하세요" />
      <button type="submit">전송</button>
    </form>
  );
};

export default MsgInput;
