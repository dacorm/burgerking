import Link from 'next/link';
import { useEffect } from "react";
import { useRouter } from "next/router";


const NotFoundPage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, []);

    return (
        <div className='not-found'>
            <h1>Ой...</h1>
            <h2>Такой страницы здесь нет :с</h2>
            <p>Переход на главную страницу осуществится через<Link href='/'><a> 3 секунды...</a></Link></p>
        </div>
    )
}

export default NotFoundPage;