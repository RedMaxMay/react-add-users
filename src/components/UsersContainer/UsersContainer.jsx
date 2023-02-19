import React from "react";
import { useAppContext } from "../Context/AppContext";
import UserCard from "../UserCard/UserCard";
import s from "./style.module.css";

export default function UsersContainer() {
  const { users } = useAppContext();

  const maleUsers = users.filter((user) => user.gender === "Male");
  const femaleUsers = users.filter((user) => user.gender === "Female");

  return (
    <>
      {maleUsers[0] && (
        <div className={s.users_container}>
          <h2>Male Users:</h2>
          <div className={s.users_wrap}>
            {maleUsers.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        </div>
      )}
      {femaleUsers[0] && (
        <div className={s.users_container}>
          <h2>Female Users:</h2>
          <div className={s.users_wrap}>
            {femaleUsers.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
