import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function ApiPage() {
  const code1 = `const users = [
  { id: 1, name: "John Doe"},
];`;

  const code2 = `
export async function GET() {
  //TBD - return data
}
`;
  const code3 = `export async function GET() {
  try {
    return Response.json({
      success: true,
      data: users
    });
  } catch {
    return Response.json(
      { success: false, error: "err msg" },
      { status: 500 }
    );
  }`;

  return (
    <main>
      <h1>Create an API</h1>
      <p>New Folder:</p>
      <p>
        /src/app/api/<span className="blue">users/route.ts</span>
      </p>
      <p>Mock Data</p>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {code1}
      </SyntaxHighlighter>
      <p>Write functions for GET, POST, etc</p>
      <SyntaxHighlighter className="text-left" language="javascript" style={dracula}>
        {code2}
      </SyntaxHighlighter>

      <p>Add a try and catch to return your data</p>

      <SyntaxHighlighter className="text-left" language="javascript" style={dracula}>
        {code3}
      </SyntaxHighlighter>
      <p className="small-text">
        If you don&apos;t create a function for an HTTP method NextJS automatically sends '405 (Method Not Allowed)'
      </p>
    </main>
  );
}
