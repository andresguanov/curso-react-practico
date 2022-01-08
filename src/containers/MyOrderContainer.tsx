import { ShoppingItem } from '../components/ShoppingItem'
import { OrderInfo } from '../components/OrderInfo'


export const MyOrderContainer = (): JSX.Element => {

    return (
        <div className="w-full h-screen grid place-items-center">
            <div className="w-80">
                <h1 className="text-lg mb-10 font-bold">My order</h1>
                <OrderInfo />
                <ShoppingItem />
                <ShoppingItem />
                <ShoppingItem />


            </div>
        </div>
    )
}