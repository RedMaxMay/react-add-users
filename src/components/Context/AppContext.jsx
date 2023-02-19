// react
import { createContext, useContext, useEffect, useState } from "react";

// создаем контекст
const AppContext = createContext();

// провайдер
export const AppProvider = ({ children }) => {
  // const usersTest = [
  //   {
  //     id: 1,
  //     name: "Ivan",
  //     avatar:
  //       "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
  //     gender: "male",
  //   },
  //   {
  //     id: 2,
  //     name: "Jack",
  //     avatar:
  //       "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
  //     gender: "male",
  //   },
  //   {
  //     id: 3,
  //     name: "Anna",
  //     avatar:
  //       "https://as2.ftcdn.net/v2/jpg/02/79/66/93/1000_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg",
  //     gender: "female",
  //   },
  // ];

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (e) => {
    e.preventDefault();

    console.log(users);

    const name = e.target.name.value;
    const avatar = e.target.avatar.value;
    const gender = e.target.gender.value;

    const newUser = { id: Date.now(), name, avatar, gender };

    setUsers([...users, newUser]);

    console.log(users);

    e.target.name.value = "";
    e.target.avatar.value = "";
    e.target.gender.value = "";
  };

  const deleteUser = (delId) => {
    setUsers(users.filter((user) => user.id !== delId));
  };

  return (
    <AppContext.Provider value={{ users, setUsers, addUser, deleteUser }}>
      {children}
    </AppContext.Provider>
  );
};

// утилита для извлечения значений из контекста
export const useAppContext = () => useContext(AppContext);
