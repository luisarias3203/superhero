import { useRouter } from 'next/router';
import Layout from '../../components/layout';

export default function HeroDetail() {
  const router = useRouter();
  console.log(router);
  return (
    <Layout>
      <p>Detail page</p>
      <p>Hero: {router.query.id}</p>
    </Layout>
  );
}
