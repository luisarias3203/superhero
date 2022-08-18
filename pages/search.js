import CustomLink from 'next/link';
import CustomCard from '../components/card';
import Layout from '../components/layout';

export default function Search() {
  return (
    <Layout>
      <p>Search page</p>
      <CustomCard />
      <CustomLink href="/details/[id]" as={`/details/${1}`}>
        <a>Go to hero </a>
      </CustomLink>
    </Layout>
  );
}
