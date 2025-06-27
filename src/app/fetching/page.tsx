"use client";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface User {
  id: number;
  name: string;
}
const UserSettings: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  // no need for useEffect, making the call on a button press.
  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      const res = await response.json();
      console.log("res:", res.data);
      setUsers(res.data);
    } catch (err) {
      throw new Error(`Error fetching Users: ${err}`);
    }
  };

  //POST (a copy of the previous users)
  // const handlePost = async (user: User) => {
  const handlePost = async () => {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "JD",
          email: "test@email.com1234567",
          password: "test1",
        }),
      });
      const result = await res.json();
      const createdUser = result.data;

      //this checks http response errors
      if (!res.ok) {
        console.error(result.error);
        return;
      }
      setUsers((prev) => [...prev, createdUser]);
    } catch (err) {
      //catch fails for network, json, CORS, etc.
      const errorMessage = err instanceof Error ? err.message : "Unknown Error handlePOST";
      return Response.json({ success: false, error: errorMessage }, { status: 500 });
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
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            {/* <button className="btn btn-small" onClick={() => handlePost(user)} type="button"> TODO: Take input*/}
            <button className="btn btn-small" onClick={() => handlePost()} type="button">
              POST Call (this user)
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserSettings;
