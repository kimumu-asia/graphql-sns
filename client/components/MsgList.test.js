import { render, screen } from "@testing-library/react";

import MsgList from "./MsgList";

test("renders messages correctly", () => {
  const originalMsgs = Array(50)
    .fill(0)
    .map((_, i) => ({
      id: 50 - i,
      userId: getRandomUserId(),
      timestamp: 1234567890123 + (50 - i) * 1000 * 60,
      text: `${50 - i} mock text`,
    }));

  render(<MsgList msgs={originalMsgs} />);

  const msgElements = screen.getAllByTestId("message");
  expect(msgElements.length).toBe(originalMsgs.length);

  originalMsgs.forEach((msg, index) => {
    const msgElement = msgElements[index];
    expect(msgElement).toHaveTextContent(msg.text);
  });
});
