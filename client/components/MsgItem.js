const MsgItem = ({ userId, timestamp, text }) => {
  return (
    <li className="message_item">
      <h3>
        {userId}{" "}
        <sub>
          {new Date(timestamp).toLocaleString("ko-KR", {
            yaer: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </sub>
      </h3>

      {text}
    </li>
  );
};

export default MsgItem;
