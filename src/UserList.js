import React, { useEffect } from "react";

const User = React.memo(({ user, onRemove, onToggle }) => {
  const { username, email, id, active } = user;

  return (
    <div>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>{" "}
      <span>{email}</span>
      <button onClick={() => onRemove(id)}>delete</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        ></User>
      ))}
    </div>
  );
}

export default React.memo(UserList);
