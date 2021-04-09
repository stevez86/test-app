import Page from '../components/Page';

export default Page

export async function getStaticProps() {
  return {
    revalidate: 60,
    props: {},
  };
}
