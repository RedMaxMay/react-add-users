import { React } from "react";
import { useAppContext } from "../Context/AppContext";
import s from "./form.module.css";

export default function Form() {
  const { addUser } = useAppContext();

  return (
    <form className={s.form} onSubmit={addUser}>
      <h2>Add new user:</h2>
      <input
        className={s.input}
        type="text"
        name="name"
        placeholder="User Name..."
        required
      />

      <input
        className={s.input}
        type="text"
        name="avatar"
        placeholder="Link to user Avatar..."
        required
      />

      <select className={s.input} name="gender" required>
        <option value="">Select gender...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <button className={s.btn}>Add user</button>
    </form>
  );
}
