import React, { useContext } from "react";
import { UserDispatch } from "./App";

const User = React.memo(({ user }) => {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
        onClick={() =>
          dispatch({ type: "TOGGLE_USER", id })
        }
      >
        {username}
      </b>{" "}
      <span>{email}</span>
      <button
        onClick={() =>
          dispatch({ type: "REMOVE_USER", id })
        }
      >
        delete
      </button>
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
}

export default React.memo(UserList);
