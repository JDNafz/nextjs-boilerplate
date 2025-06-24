import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

//this component renders an explanation of how the NextJS 'App Router'
export default function Init() {
  const code1 = `$ npx create-next-app@latest`;
  const code2 = `Would you like to use: 
√  project name? ... \`project-name\` 
√    TypeScript? ...  No / \`Yes\`  
√        ESLint? ...  No / \`Yes\`	
√  Tailwind CSS? ... \`No\` / Yes   
√     use \`src/\` ...  No / \`Yes\`
√   App Router?  ...  No / \`Yes\` 
√      Turbopack?...  No / \`Yes\`
√ import alias'? ... \`No\` / Yes  `;

  return (
    <div className="init">
      <h1>Initialize your Project</h1>
      <p className="text-left"> Run:</p>
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
