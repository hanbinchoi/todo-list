import React, {
  createContext,
  useContext,
  useState,
} from "react";

const MyContext = createContext("defaultValue");

function Child() {
  const text = useContext(MyContext);
  return <div>{text}</div>;
}

function Parent() {
  return <Child />;
}

function GrandParent() {
  return <Parent></Parent>;
}

function ContextSample() {
  const [value, setValue] = useState(true);
  return (
    <MyContext.Provider value={value ? "good" : "bad"}>
      <GrandParent />
      <button onClick={() => setValue(!value)} />
    </MyContext.Provider>
  );
}

export default ContextSample;
