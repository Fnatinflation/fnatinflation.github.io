import { useRouter } from 'next/router'
import Layout from '../../Components/Layout';
import ShopItemComponent from '../items/ShopItemComponent';



export default function DynamicPost() {
    
    const router = useRouter();
    const item = JSON.parse(router.query.item)
    return (
        <Layout>
            <ShopItemComponent item={item}></ShopItemComponent>
        </Layout>
    )
}