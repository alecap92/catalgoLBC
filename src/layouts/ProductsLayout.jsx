import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Sidebar from '@/components/Sidebar'
import styles from '@/styles/layouts/productsLayout.module.css'

const ProductsLayout = ({
    title = "LatinAmerica Business Center",
    children
}) => {
    const [showSidebar, setShowSidebar] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setShowSidebar(false)
    }, [router.asPath])

    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={ styles.layoutContainer }>
                <div className={ styles.burgerMenu }>
                    <button onClick={ () => setShowSidebar(true) }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className={ `${styles.layoutSidebarContainer} ${showSidebar && styles.active}` }>
                    <button onClick={ () => setShowSidebar(false) }>&#215;</button>
                    <Sidebar />
                </div>
                <div className={ styles.layoutContentContainer }>
                    { children }
                </div>
            </div>
        </>
    )
}

export default ProductsLayout