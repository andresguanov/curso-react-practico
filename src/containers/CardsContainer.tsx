import { ProductCard } from "@components/ProductCard"

export const CardsContainer = (): JSX.Element => {
    return (
        <div className="grid grid-cols-3 gap-6 place-content-center m-7 sm:grid-cols-container" >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

        </div>
    )
}