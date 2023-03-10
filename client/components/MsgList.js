import MsgItem from "./MsgItem";
const userIds = ["shim", "kim"];
const getRandomUserId = () => userIds[Math.round(Math.random())];

const msgs = Array(50)
  .fill(0)
  .map((_, i) => ({
    id: 50 - i,
    userId: getRandomUserId(),
    timestamp: 1234567890123 + i + 1000 * 60,
    text: `${50 - i} mock text`,
  }));

const MsgList = () => (
  <ul className="message">
    {msgs.map((x) => (
      <MsgItem key={x.id} {...x} />
    ))}
  </ul>
);

export default MsgList;
