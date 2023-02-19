import React from "react";
import { useAppContext } from "../Context/AppContext";
import s from "./style.module.css";

export default function UserCard({ name, avatar, id, gender }) {
  const { deleteUser } = useAppContext();

  return (
    <div className={s.user_card}>
      <div className={s.img_wrap}>
        <img className={s.img} src={avatar} alt="user avatar" width="200px" />
      </div>
      <button onClick={() => deleteUser(id)} className={s.delete_btn}>
        Delete user
      </button>
      <h4>User name: {name}</h4>
    </div>
  );
}
