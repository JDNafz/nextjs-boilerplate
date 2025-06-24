import Link from "next/link";
import "./../globals.css"
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="blogLayout">
      {/* Header that appears on all blog pages */}
      <header>
        {/* ----- BlogLayout -------- */}
        <h1>My Blog `Layout`</h1>
        <Link href="/blog">← Back to All Posts</Link>
      </header>

      {/* This is where the page content gets rendered */}
      <div>{children}</div>
      {/* ----- BlogLayout -------- */}
    </section>
  );
}
