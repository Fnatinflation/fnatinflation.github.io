import { useRouter } from 'next/router'
import Layout from '../../Components/Layout';
import PostComponent from '../../Components/PostComponent';



export default function DynamicPost() {

    const router = useRouter();

    return (
        <Layout>
            <PostComponent title={router.query.id}></PostComponent>
        </Layout>
    )
}