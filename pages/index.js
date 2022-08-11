import Link from 'next/link';

export default function Home() {
  return (
    <>
      <p>Homepage</p>
      <Link href="/search">Enter</Link>
    </>
  );
}
