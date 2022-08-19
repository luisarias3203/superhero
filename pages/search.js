import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CustomCard from '../components/card';
import Layout from '../components/layout';

export default function Search() {
  return (
    <Layout>
      {/* <CustomLink href="/details/[id]" as={`/details/${1}`}>
        <a>Go to hero </a>
      </CustomLink> */}
      <Container maxWidth="lg">
        <Grid container spacing={20}>
          <Grid item xs={12} sm={6} lg={3}>
            <CustomCard />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CustomCard />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CustomCard />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CustomCard />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CustomCard />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
