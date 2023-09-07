import { useState } from "react";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addDoc(collection(db, "users"), {
      email,
      password,
    });
    console.log(response);
  };
  return (
    <div>
      <h1>Create Account</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label htmlFor="password-confirm">Confirm Password</label>
        <input type="password" id="password-confirm" name="password-confirm" />
        <button type="submit" onClick={handleSubmit}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
