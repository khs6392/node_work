import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>app router</h1>
      <ul>
        <li>
          <Link href="/sub">/app/sub/page.js</Link>
        </li>
        <li>
          <Link href="/blog/1/">/app/blog/[slug]</Link>
        </li>
        <li>
          <Link href="/api/">/route/ </Link>
        </li>
      </ul>
    </>
  );
}
