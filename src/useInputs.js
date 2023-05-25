import { useState, useCallback, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUTS":
      return { ...state, [action.name]: action.value };
    case "RESET":
      return Object.keys(state).reduce((acc, cur) => {
        acc[cur] = "";
        return acc;
      }, {});
    default:
      throw new Error("unhandled action");
  }
}

const useInputs = (initialForm) => {
  const [form, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUTS",
      name,
      value,
    });
  }, []);

  const reset = useCallback(() => {
    dispatch({
      type: "RESET",
    });
  }, []);

  return [form, onChange, reset];
};

export default useInputs;
