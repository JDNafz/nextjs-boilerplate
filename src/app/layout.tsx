"use client"

import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
        {pathname !== "/" && (
          <nav>
            <Link href="/">Go to Home Page</Link>
          </nav>
        )}
      </body>
    </html>
  );
}
