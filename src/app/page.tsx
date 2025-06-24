// import Image from "next/image";

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the main landing page</p>
      <nav>
        <Link href="/about">Go to About Page</Link> |<Link href="/contact">Go to Contact Page</Link>
        |<Link href="/blog"> Go to Blog Page</Link>
      </nav>
    </div>
  );
}
