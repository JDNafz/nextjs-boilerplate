"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>NextJS Cheat Sheet </h1>
      <p>Building your own version will help build your confidence with these topics!</p>
      <ul className="topics-list">
        <li>
          <Link className="link" href="/init">
            npx create-next-app@latest
          </Link>
        </li>
        {/* <li>
          <Link className="link" href="/file-structure">File Structure</Link>
					</li> */}
        <li>
          <Link className="link" href="/app-router">
            Navigation with {`<Link>`}
          </Link>
        </li>
        {/* <li>
          <Link className="link" href="/"></Link>
					</li> */}
        <li>
          <h3>External Links</h3>
          <Link className="link" target="_blank" href="https://nextjs.org/docs">
            NextJS.org/Docs
          </Link>
          <Link className="link" target="_blank" href="https://vercel.com/new/templates">
            Templates
          </Link>
          <Link
            className="link"
            target="_blank"
            href="https://github.com/emanuelefavero/next-js?tab=readme-ov-file"
          >
            Cheat sheet Repo
          </Link>
        </li>
      </ul>
      <p className="small-text">NextJS v15.3.4</p>
    </div>
  );
}
