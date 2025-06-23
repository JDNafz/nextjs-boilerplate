// import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the main landing page</p>
      <nav>
        <a href="/about">Go to About Page</a> | <a href="/contact">Go to Contact Page</a> | <a href="/blog"> Go to Blog Page</a>
      </nav>
    </div>
  );
}
