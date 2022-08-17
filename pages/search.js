import Link from 'next/link';
import Layout from '../components/layout';

export default function Search() {
  return (
    <Layout>
      <p>Search page</p>
      <Link href="/details/[id]" as={`/details/${1}`}>
        <a>Go to hero </a>
      </Link>
    </Layout>
  );
}
