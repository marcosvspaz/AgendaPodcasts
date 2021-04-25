import {openDB} from '../lib/openDB';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Header from '../components/Header';

export function index({ posts =[]}) {
  return (
    <>
      <Header />
      <Body posts={posts}></Body>
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
 
const db = await openDB();
const data = await db.collection('agenda').find().toArray();

 
  return {

 props: {
  posts: JSON.parse(JSON.stringify(data)),
}, // will be passed to the page component as props

}
}
export default index;
