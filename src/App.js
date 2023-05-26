import React, {
  useMemo,
  useReducer,
  createContext,
} from "react";
import { produce } from "immer";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: "choi",
      email: "aaa@bbb.com",
      active: true,
    },
    {
      id: 2,
      username: "han",
      email: "aaa@bbb.com",
      active: false,
    },
    {
      id: 3,
      username: "bin",
      email: "aaa@bbb.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    case "TOGGLE_USER":
      return produce(state, (draft) => {
        const user = draft.users.find(
          (user) => user.id === action.id
        );
        user.active = !user.active;
      });
    case "REMOVE_USER":
      return produce(state, (draft) => {
        const index = draft.users.findIndex(
          (user) => user.id === action.id
        );
        draft.users.splice(index, 1);
      });
    default:
      throw new Error("Unhandled action");
  }
}

export const UserDispatch = createContext(null);

const App = () => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const { users } = state;

  const count = useMemo(
    () => countActiveUsers(users),
    [users]
  );

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
};

export default App;
