"use client";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface User {
  id: number;
  name: string;
}
const UserSettings: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>([]);

  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const res = await response.json();
    if (res.success) {
      console.log("res:", res.data);
      setUsers(res.data);
    }
  };

  //POST (a copy of the previous users)
  const handleDuplicate = async (user: User) => {
    //  const createUser = async (e: React.FormEvent) => {
    //   e.preventDefault();

    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        // normally build object here from useState
        {
          name: user.name,
        }
      ),
    });
    if (res.ok) {
      fetchUsers();
    }
  };

  const code1 = `const fetchUsers = async () => {
const response = await fetch("/api/users");
const res = await response.json();
if (res.success) {
  console.log("res:", res.data);
  setUsers(res.data);
}};	`;

  return (
    <div>
      <h3>Fetching</h3>

      <button onClick={fetchUsers}> {`<button onClick={fetchUsers}>This Btn</button>`}</button>

      <SyntaxHighlighter language="javascript" style={dracula}>
        {code1}
      </SyntaxHighlighter>

      <p className="small-text"> Normally would use a useEffect to fetch*</p>
			<h3> List of Users </h3>
      {users?.map((user) => (
        <div key={user.id}>
          {user.name}
          <button onClick={() => handleDuplicate(user)} type="button">
            {" "}
            Duplicate User
          </button>
        </div>
      ))}
    </div>
  );
};
export default UserSettings;
