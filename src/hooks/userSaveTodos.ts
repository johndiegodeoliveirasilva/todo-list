import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { AES, enc } from "crypto-js";
import { Todo } from "../@types/Todo";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY as string;
const LOCAL_STORAGE_KEY = 'TODOS_DATA';

export const userSaveTodos = () => {
  const [gottedInitialData, setGettedInitialData] = useState(false);

  const { state, dispatch} = useContext(TodoContext);

  const handleChangesTodo = () => {

    if (!gottedInitialData) return;

    const value = AES.encrypt(JSON.stringify(state), SECRET_KEY);

    localStorage.setItem(LOCAL_STORAGE_KEY, value.toString());
  }

  // Geting todos initial
  useEffect(() => {

    try {
      const todoData = localStorage.getItem(LOCAL_STORAGE_KEY);

      if (todoData) {
        const bytes = AES.decrypt(todoData, SECRET_KEY);
        const decryptedData: Todo[] = JSON.parse(bytes.toString(enc.Utf8));

        dispatch({type: 'ADD_TODOS', payload: decryptedData})

      }
    } catch {
      alert('Error on get todos data');
    }
    setGettedInitialData(true)
  }, [])

  useEffect(() => { handleChangesTodo() }, [state])
}