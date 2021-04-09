import { useRouter } from 'next/router';
import Json from '../components/Json';



const Page = () => {
  const router = useRouter()
  return <Json json={router} />
}

export default Page;
