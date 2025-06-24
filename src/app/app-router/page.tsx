import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

//this component renders an explanation of how the NextJS 'App Router'
export default function AppRouter() {
  const code1 = ``;
  const code2 = ``;


  return (
    <div className="init">
      <h1>Navigation</h1>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {code1}
      </SyntaxHighlighter>
      <p>
        <span className="highlight">Tab</span> and
        <span className="highlight">Enter</span> to select
      </p>
      <p className="small-text">*The following is simplified </p>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {code2}
      </SyntaxHighlighter>
    </div>
  );
}
