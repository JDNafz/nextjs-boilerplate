"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p className="small-text">NextJS v15.3.4</p>
      <h3>Topics</h3>
      <ul>
        <li>
          <Link className="link" href="/init">
            Initialize/Install NextJS
          </Link>
        </li>
        <li>
          <Link className="link" href="/app-router">
            How to navigate with {`<Link>`}
          </Link>
        </li>
        <li>
          <Link className="link" href="/"></Link>
        </li>
        <li>
          <Link className="link" href="/"></Link>
        </li>
        <li>
          <Link className="link" href="/docs">
            Official Docs
          </Link>
        </li>
      </ul>
    </div>
  );
}
