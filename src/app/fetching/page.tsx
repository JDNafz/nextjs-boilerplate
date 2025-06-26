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
  const handlePost = async (user: User) => {
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

      <SyntaxHighlighter language="javascript" style={dracula}>
        {code1}
      </SyntaxHighlighter>

      <button className="btn btn-large" onClick={fetchUsers}>
        Try it!
      </button>
      <button className="btn" onClick={() => setUsers([])}>
        Clear List
      </button>
      <p className="small-text"> Normally would use a useEffect to fetch*</p>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name}
            <button className="btn btn-small" onClick={() => handlePost(user)} type="button">
              POST Call (this user)
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserSettings;
