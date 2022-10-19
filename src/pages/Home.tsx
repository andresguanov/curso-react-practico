import { Header } from '@components/Header'
import { CardsContainer } from '@containers/CardsContainer'
import { Layout } from '@containers/Layout'

export const Home = (): JSX.Element => {
    return (
        <Layout>
            <Header />
            <CardsContainer />
        </Layout>
    )
}