"use client";

import Link from "next/link";

export default function HomePage() {
  const linkList = [
    {
      url: "/init",
      name: "npx create-next-app@latest",
    },
    {
      url: "/app-router",
      name: "Navigation with <Link>",
    },
    {
      url: "/api",
      name: "Create API",
    },
    {
      url: "/fetching",
      name: "Fetch From API",
    },
  ];

  return (
    <>
      <div className="home-page">
        <h1>NextJS Cheat Sheet </h1>
        <p className="site-description">
          Building your own version will help build your confidence with these topics!
        </p>
        <ul className="topics-list">
          {linkList.map((link, idx) => {
            return (
              <li className="li-link" key={idx}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            );
          })}
        </ul>

        <div>
          <h3>External Links</h3>
          <Link target="_blank" href="https://nextjs.org/docs">
            NextJS.org/Docs
          </Link>
          <Link target="_blank" href="https://vercel.com/new/templates">
            Templates
          </Link>
          <Link target="_blank" href="https://github.com/emanuelefavero/next-js?tab=readme-ov-file">
            Cheat sheet Repo
          </Link>
        </div>
      </div>
      <p className="small-text footer">NextJS v15.3.4</p>
    </>
  );
}
