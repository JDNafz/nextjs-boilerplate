import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is the contact page</p>
      {/* Navigation links */}
      <nav>
        <Link href="/">Go to Home Page</Link> | 
        <Link href="/about">Go to About Page</Link>
      </nav>
    </div>
  );
}