/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

//this component renders an explanation of how the NextJS 'App Router'
export default function AppRouter() {
  const code1 = `<Link href="/app-router">'/app-router'</Link>`;
  const code2 = `<a href="/app-router">'/app-router'</a>`;
  return (
    <div className="app-router">
      <h1>Navigation</h1>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {code1}
      </SyntaxHighlighter>
      <Link href="/app-router">'/app-router'</Link>
      <p>This appears in the actual html tags when rendered as</p>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {code2}
      </SyntaxHighlighter>
			<p>So you can still select the {`<a>`} tags with CSS</p>
      <p className="small-text margin-top">
        *Make sure to <span className="highlight">import Link from "next/link"</span> at the top of
        the page.
      </p>
    </div>
  );
}
