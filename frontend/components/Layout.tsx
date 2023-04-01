import Head from "next/head"
import NavBar from "./Shared/NavBar"
import Footer from "./Shared/Footer"

type props = {
    title?: string,
    keywords?: string,
    description?: string,
    children: React.ReactNode
}

const Layout: React.FC<props> = ({ title, keywords, description, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Web Market | Get Best Web Services',
    description: 'choose your desire developers and get fantastic web services',
    keywords: 'web design, web development, unit testing, bug fixing, responsive website, responsiveness'
}

export default Layout